import { Resend } from "resend";

// Allowed origins for CSRF protection
const ALLOWED_ORIGINS = [
  "https://trevorthewebdeveloper.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

// Input limits
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

// Rate limiting - in-memory store (per serverless instance)
const submissions = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_SUBMISSIONS = 2; // max 2 submissions per minute per IP

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  // Clean up old entries
  for (const [key, timestamps] of submissions) {
    const recent = timestamps.filter((t) => t > windowStart);
    if (recent.length === 0) submissions.delete(key);
    else submissions.set(key, recent);
  }

  const ipTimestamps = (submissions.get(ip) || []).filter(
    (t) => t > windowStart
  );

  if (ipTimestamps.length >= MAX_SUBMISSIONS) return true;

  ipTimestamps.push(now);
  submissions.set(ip, ipTimestamps);
  return false;
}

// Spam word filter
const SPAM_WORDS = [
  "crypto",
  "bitcoin",
  "ethereum",
  "nft",
  "viagra",
  "cialis",
  "pharmacy",
  "casino",
  "lottery",
  "jackpot",
  "betting",
  "seo services",
  "backlinks",
  "link building",
  "make money",
  "earn money",
  "passive income",
  "free traffic",
  "guaranteed ranking",
  "click here",
  "act now",
  "limited time offer",
  "onlyfans",
  "webcam",
];

function containsSpamWords(text) {
  const lower = text.toLowerCase();
  return SPAM_WORDS.some((word) => lower.includes(word));
}

function escapeHtml(str) {
  if (!str || typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeForSubject(str) {
  if (!str || typeof str !== "string") return "";
  return str.replace(/[\r\n]/g, "").trim();
}

export async function POST(request) {
  try {
    // CSRF: validate request origin
    const origin = request.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return Response.json(
        { error: "Invalid request origin" },
        { status: 403 }
      );
    }

    // Rate limiting by IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const { name, email, message, website } = await request.json();

    // Honeypot check - reject if the hidden field is filled
    if (website) {
      return Response.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Type validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return Response.json(
        { error: "Invalid field types" },
        { status: 400 }
      );
    }

    // Required fields
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Length validation
    if (
      trimmedName.length > MAX_NAME_LENGTH ||
      trimmedEmail.length > MAX_EMAIL_LENGTH ||
      trimmedMessage.length > MAX_MESSAGE_LENGTH
    ) {
      return Response.json(
        { error: "Input exceeds maximum length" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Spam word filter
    const fullText = `${trimmedName} ${trimmedEmail} ${trimmedMessage}`;
    if (containsSpamWords(fullText)) {
      return Response.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "trevorbrown.web@gmail.com"],
      subject: `New Contact Form Message from ${sanitizeForSubject(trimmedName)}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json(
      { message: "Email sent successfully", id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
