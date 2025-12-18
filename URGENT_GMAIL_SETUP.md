# URGENT: Gmail Setup Required

Your backend server is running but needs Gmail credentials to send emails.

## Quick Setup (5 minutes):

### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to https://myaccount.google.com/
2. Click "Security" on the left
3. Look for "2-Step Verification" - make sure it's ON
   - If OFF, enable it first

### Step 2: Create Gmail App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select:
   - **App:** Mail
   - **Device:** Windows Computer
3. Google will show you a 16-character password
4. **Copy this password exactly** (includes spaces)

### Step 3: Add Password to .env
Edit `server/.env`:
```
GMAIL_USER=edano.cyreljane@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
PORT=5000
```

Replace `xxxx xxxx xxxx xxxx` with your actual Google App Password

### Step 4: Restart Backend
1. Stop the current backend (Ctrl+C in terminal)
2. Run: `npm run dev` again in the `server` folder

## Your Backend Status:
✅ Backend server is running on localhost:5000
⚠️ Gmail credentials needed for email sending
🔄 Once you add credentials and restart, emails will send!

The contact form will work once Gmail credentials are configured.
