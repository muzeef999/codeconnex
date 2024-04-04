import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const contact = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Ensure all required fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user:"nabincodeconnex123@gmail.com",
        pass: "qeuqdwpqqxwaaqxu"
      }
    });

    try {
      // Send mail
      await transporter.sendMail({
        from: email,
        to: "nabincodeconnex123@gmail.com",
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default contact;
