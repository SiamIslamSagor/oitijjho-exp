# EmailJS Setup Guide

This guide will help you set up EmailJS to send consultation booking emails from your schedule form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., "gmail", "outlook")

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```html
Subject: New Consultation Request - {{from_name}}

Hello Oitijjho Express Team,

You have received a new consultation request:

**Contact Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}

**Consultation Details:**
- Type: {{consultation_type}}
- Preferred Date: {{preferred_date}}
- Preferred Time: {{preferred_time}}

**Additional Message:**
{{message}}

**Submission Details:**
- Submitted: {{submission_time}}

Please respond to {{from_email}} to confirm the consultation.

Best regards,
Oitijjho Express Website
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `lib/emailjs-config.ts`
2. Replace the placeholder values:

```typescript
export const emailjsConfig = {
  serviceId: "your_service_id_here", // e.g., "gmail"
  templateId: "your_template_id_here", // e.g., "template_abc123"
  publicKey: "your_public_key_here", // e.g., "user_xyz789"
  // ... rest of the config
};
```

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/schedule-book`
3. Fill out the form and submit
4. Check your email for the consultation request
5. Check the browser console for success/error messages

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration is incomplete"**
   - Make sure you've updated all three values in `lib/emailjs-config.ts`

2. **"Service not found"**
   - Verify your Service ID is correct
   - Make sure your email service is properly connected

3. **"Template not found"**
   - Verify your Template ID is correct
   - Make sure the template is published

4. **"Invalid public key"**
   - Verify your Public Key is correct
   - Make sure you're using the Public Key, not the Private Key

### Testing in Development:

- EmailJS works in development mode
- You can test with real email addresses
- Check the browser console for detailed error messages

## Security Notes

- The Public Key is safe to use in client-side code
- Never expose your Private Key
- EmailJS has rate limiting on the free tier
- Consider upgrading for production use

## Free Tier Limits

- 200 emails per month
- Basic templates
- Standard support

For production use, consider upgrading to a paid plan for:
- More emails per month
- Advanced templates
- Priority support
- Custom domains

## Support

If you encounter issues:
1. Check the EmailJS documentation
2. Review the browser console for errors
3. Verify your configuration in `lib/emailjs-config.ts`
4. Contact EmailJS support if needed 