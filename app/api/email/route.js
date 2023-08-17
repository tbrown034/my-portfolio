import sgMail from "@sendgrid/mail";

export async function POST(request) {
  const { name, email, message } = await request.json();

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "trevorbrown.web@gmail.com", // Change to your recipient
    from: "tbrown034@gmail.com", // Change to your verified sender
    subject: "New contact form submission",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const response = await sgMail.send(msg);
    console.log(response[0].statusCode);
    console.log(response[0].headers);
    return new Response(
      JSON.stringify({ message: "Thanks for contacting us!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "An error occurred. Please try again later." }),
      { status: 500 }
    );
  }
}
