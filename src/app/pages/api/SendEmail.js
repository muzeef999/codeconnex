// /pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'zoho', // Your SMTP host
      port: 3000, // Your SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'nabincodeconnex123@gmail.com', // Your email address
        pass: 'TestNode@123' // Your email password
      }
    });

    try {
      // Send mail
      await transporter.sendMail({
        from: email,
        to: 'nabincodeconnex123@gmail.com', // Your email address for receiving emails
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
