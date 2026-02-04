import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio contact API is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email address'
      });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mevishf@gmail.com'],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
                line-height: 1.6; 
                color: #333; 
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header { 
                background: linear-gradient(135deg, #16253E 0%, #053B2D 100%);
                color: white; 
                padding: 30px; 
                border-radius: 12px 12px 0 0; 
                text-align: center;
              }
              .content { 
                background-color: #f9f9f9; 
                padding: 30px; 
                border-radius: 0 0 12px 12px; 
                border: 2px solid #E8EBF5;
              }
              .field { 
                margin-bottom: 20px; 
                background: white;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #FFE6EA;
              }
              .label { 
                font-weight: bold; 
                color: #16253E; 
                margin-bottom: 8px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              .value { 
                color: #333;
                font-size: 16px;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #E8EBF5;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin: 0; font-size: 24px;">✉️ New Portfolio Message</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #053B2D; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                Sent from your portfolio contact form
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        error: 'Failed to send email. Please try again.'
      });
    }

    console.log('Email sent successfully:', data);
    res.json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error. Please try again later.'
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Portfolio contact API running on http://localhost:${PORT}`);
  console.log(`📧 Email service: Resend`);
});
