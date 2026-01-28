require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());
app.use(express.json());

/* =========================
   MAIL TRANSPORT
========================= */

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Email transport error:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

/* =========================
   ROUTES
========================= */

app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message are required",
      });
    }

    const name = `${firstName || ""} ${lastName || ""}`.trim();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await contactEmail.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Send mail error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

/* =========================
   SERVER START
========================= */

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
