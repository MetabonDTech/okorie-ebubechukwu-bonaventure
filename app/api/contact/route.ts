import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json();

		// Setup transporter (use your real SMTP credentials)
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		// Professional email template
		const htmlTemplate = `
		<div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
		  <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 20px; border: 1px solid #e5e5e5;">
		    <h2 style="color: #111827;">📩 New Contact Message</h2>
		    <p style="font-size: 15px; color: #374151;">You received a new message via your website contact form.</p>

		    <div style="margin-top: 20px;">
		      <p><strong>Name:</strong> ${name}</p>
		      <p><strong>Email:</strong> ${email}</p>
		      <p><strong>Message:</strong></p>
		      <p style="background: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">${message}</p>
		    </div>

		    <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">

		    <p style="font-size: 13px; color: #6b7280; text-align:center;">
		      This message was automatically generated from your website.
		    </p>
		  </div>
		</div>
		`;

		await transporter.sendMail({
			from: `"Website Contact" <${process.env.SMTP_USER}>`,
			to: process.env.RECEIVING_EMAIL, // admin email
			subject: `New message from ${name}`,
			html: htmlTemplate,
		});

		return NextResponse.json({ status: 'success' });
	} catch (error) {
		console.error('CONTACT_FORM_ERROR', error);
		return NextResponse.json({ status: 'error' }, { status: 500 });
	}
}
