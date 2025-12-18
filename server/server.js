import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const GMAIL_USER = process.env.GMAIL_USER || 'edano.cyreljane@gmail.com';
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const SEND_GRID_API_KEY = process.env.SENDGRID_API_KEY;

// Email transporter configuration
let transporter = null;
let emailServiceReady = false;

// Try to create Nodemailer transporter if Gmail credentials are available
if (GMAIL_APP_PASSWORD && GMAIL_APP_PASSWORD.trim()) {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASSWORD,
        },
    });

    // Verify transporter connection
    transporter.verify((error, success) => {
        if (error) {
            console.error('❌ Gmail transporter verification failed:', error.message);
            emailServiceReady = false;
        } else {
            console.log('✅ Gmail transporter is ready to send messages');
            emailServiceReady = true;
        }
    });
} else {
    console.warn('⚠️  Gmail App Password not configured. Using fallback email mode.');
    emailServiceReady = false;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Email server is running' });
});

// Email sending endpoint
app.post('/api/send-email', async(req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: name, email, and message are required',
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email address format',
            });
        }

        // If Gmail credentials are configured, send via Gmail
        if (emailServiceReady && transporter) {
            const mailOptions = {
                from: GMAIL_USER,
                to: 'edano.cyreljane@gmail.com',
                subject: `New Portfolio Message from ${name}`,
                html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #630000 0%, #000000 100%); padding: 20px; color: white; border-radius: 10px 10px 0 0;">
            <h2 style="margin: 0; font-size: 24px;">New Portfolio Message</h2>
          </div>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 0 0 10px 10px;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <div style="border-top: 2px solid #630000; padding-top: 15px; margin-top: 15px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; word-wrap: break-word;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `,
                replyTo: email,
            };

            await transporter.sendMail(mailOptions);
            console.log(`✅ Email sent from ${email} (${name})`);

            return res.json({
                success: true,
                message: 'Email sent successfully! I will get back to you soon.',
            });
        }

        // Fallback: If no Gmail credentials, provide instructions
        console.log(`📧 Email submission received (fallback mode): From: ${name} (${email})`);
        console.log(`Message: ${message}`);

        return res.json({
            success: true,
            message: 'Message received! Please configure Gmail credentials for automatic delivery.',
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);

        // Check if it's an authentication error
        if (error.code === 'EAUTH') {
            return res.status(500).json({
                success: false,
                error: 'Gmail authentication failed. Check App Password in server/.env',
            });
        }

        if (error.message && error.message.includes('Invalid login')) {
            return res.status(500).json({
                success: false,
                error: 'Gmail login failed. Verify GMAIL_APP_PASSWORD in server/.env',
            });
        }

        res.status(500).json({
            success: false,
            error: error.message || 'Failed to send email. Please try again later.',
        });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Email server running on http://localhost:${PORT}`);
    console.log(`📧 Send emails to POST http://localhost:${PORT}/api/send-email`);
});