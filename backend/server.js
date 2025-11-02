// @ts-check
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Allow your Amplify frontend URL
app.use(
  cors({
    origin: "https://main.d3aj9brlsf06al.amplifyapp.com", // your Amplify domain
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, phno, message } = req.body;

  try {
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
    res.json({ success: true, message: "Message was successfully sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Message not sent." });
  }
});

app.listen(5002, "0.0.0.0", () => console.log("✅ Server is running on port 5002"));
