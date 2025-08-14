import { Resend } from "resend";

//
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use this for testing, or your verified domain
      to: ["trevorbrown.web@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
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
