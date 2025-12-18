# EmailJS Setup Guide for CY's Portfolio

This guide will help you set up EmailJS to enable the contact form to send emails to your Gmail inbox.

## Step 1: Create an EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Gmail Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** from the list
4. Click **Connect Account** and authorize EmailJS to access your Gmail
5. Give it a name (e.g., "Gmail")
6. Copy your **Service ID** (looks like: `service_xxxxxxxxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template settings:

   **Template Name:** `portfolio_contact_form`
   
   **Email Subject:**
   ```
   New Portfolio Contact: {{from_name}}
   ```
   
   **Email Content (HTML):**
   ```html
   <p>You have a new message from your portfolio contact form!</p>
   
   <h3>From: {{from_name}}</h3>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>
   ```

4. Click **Save Template**
5. Copy your **Template ID** (looks like: `template_xxxxxxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** settings in EmailJS
2. Look for **Public Key** (looks like: `xxxxxxxxxxxxx`)

## Step 5: Update Your Portfolio Code

Open `src/pages/Index.tsx` and find these lines at the top of the component:

```typescript
useEffect(() => {
  emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Replace with your public key
}, []);
```

And in the `handleFormSubmit` function, find:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',        // Replace with your EmailJS Service ID
  'YOUR_TEMPLATE_ID',       // Replace with your EmailJS Template ID
```

Replace the placeholder values with your actual credentials:
- `YOUR_EMAILJS_PUBLIC_KEY` → Your Public Key from Step 4
- `YOUR_SERVICE_ID` → Your Gmail Service ID from Step 2
- `YOUR_TEMPLATE_ID` → Your Template ID from Step 3

**Example (with fake values):**
```typescript
useEffect(() => {
  emailjs.init('abc123def456ghi789jkl');
}, []);

// In handleFormSubmit:
await emailjs.send(
  'service_abc123',
  'template_xyz789',
```

## Step 6: Test Your Contact Form

1. Go back to your portfolio at http://localhost:8080/
2. Scroll to the contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Gmail inbox for the test email

## Troubleshooting

- **"Failed to send message"**: Double-check your Service ID and Template ID
- **Email not received**: Check your spam folder and verify your Gmail is connected in EmailJS
- **CORS errors**: Make sure you're using the correct Public Key
- **Template variables not populating**: Verify the template variable names match exactly (case-sensitive)

## Security Notes

⚠️ **Important:** Your Public Key is intentionally public and safe to share. It cannot send emails without the Service ID and Template ID, which you keep private.

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/contact/
