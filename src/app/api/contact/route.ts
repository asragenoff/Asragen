import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const recipientEmail = 'asragenoff@gmail.com';

    // Retrieve SMTP configurations
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Fallback if SMTP keys are not configured yet
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log('--- MOCK EMAIL SUBMISSION (SMTP NOT CONFIGURED) ---');
      console.log(`To: ${recipientEmail}`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log('--------------------------------------------------');
      
      return NextResponse.json({
        success: true,
        message: 'Message captured successfully (Developer Mode: Logged to console). Please configure SMTP variables to send live emails.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || '587'),
      secure: smtpPort === '465', // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // SMTP mail sender
      replyTo: email, // Reply directly to the client
      to: recipientEmail, // Send to owner
      subject: `New Project Requirement from ASRAGEN Website - ${name}`,
      text: `You have received a new contact submission from the website.

Name: ${name}
Email: ${email}

Message/Needs:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #C9A84C; border-bottom: 2px solid #C9A84C; padding-bottom: 8px; margin-top: 0;">New Project Needs</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #C9A84C; border-radius: 4px; margin-top: 15px;">
            <p style="margin: 0; font-weight: bold; color: #555;">Client Message:</p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 25px; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent from the ASRAGEN contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
