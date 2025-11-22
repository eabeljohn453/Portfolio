import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phno, message } = body;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.USER_EMAIL,
      subject: `New contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phno}
        Message: ${message}
      `,
    };

    await transport.sendMail(mailOptions);

    return Response.json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error("Error:", err);
    return Response.json(
      { success: false, message: "Failed to send." },
      { status: 500 }
    );
  }
}

export function GET() {
  return Response.json({ message: "Backend is running!" });
}
