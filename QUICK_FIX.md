# Quick Reference: Fix Authentication Error

## The Error You're Seeing:
```
Email service authentication failed. Please check the server configuration.
```

## Why:
`GMAIL_APP_PASSWORD` in `server/.env` is empty

## Fix in 3 Steps:

### 1️⃣ Get App Password
Visit: https://myaccount.google.com/apppasswords
- Make sure 2-Step Verification is enabled first
- Select: Mail + Windows Computer
- Copy the 16-char password with spaces

### 2️⃣ Update server/.env
Edit `server/.env`:
```
GMAIL_USER=edano.cyreljane@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
PORT=5000
```

### 3️⃣ Restart Backend
```powershell
cd server
npm run dev
```

Should show:
```
✅ Email transporter is ready to send messages
🚀 Email server running on http://localhost:5000
```

## Test
- Fill contact form at localhost:8080
- Submit
- Check inbox (edano.cyreljane@gmail.com)
- Done! ✅

---

**See GMAIL_AUTH_FIX.md for detailed troubleshooting**
