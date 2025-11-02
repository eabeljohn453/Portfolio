import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Allow only your frontend domain
app.use(cors({
  origin: ["https://main.d3aj9brlsf06al.amplifyapp.com"],
  methods: ["POST", "GET"],
  credentials: true,
}));

app.use(express.json());
app.get("/contact", (req, res) => {
  res.send("✅ Backend is running fine!");
});
app.post("/contact", async (req, res) => {
  const { name, email, phno, message } = req.body;

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "eabeljohn453@gmail.com",
        pass: "wknekcqlvcnknoeq",
      },
    });

    const mailOptions = {
      from: email,
      to: "eabeljohn453@gmail.com",
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
