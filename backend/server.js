require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());
app.use(express.json());

/* =========================
   RESEND CLIENT
========================= */

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================
   HEALTH CHECK
========================= */

app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

/* =========================
   ROUTES
========================= */

app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Basic validation
    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message are required",
      });
    }

    const name = `${firstName || ""} ${lastName || ""}`.trim();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO],
      reply_to: email,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

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
