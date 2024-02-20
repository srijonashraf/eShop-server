import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  try {
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};

export default EmailSend;
