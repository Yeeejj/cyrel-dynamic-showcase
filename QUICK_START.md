# Quick Start Guide - Email Backend

## TL;DR - 5 Minutes to Working Email

### 1. Get Gmail App Password (2 min)
- Go to https://myaccount.google.com/apppasswords
- Select Mail + Windows Computer
- Copy the 16-character password

### 2. Create .env file (30 sec)
Create `server/.env`:
```
GMAIL_USER=edano.cyreljane@gmail.com
GMAIL_APP_PASSWORD=your_16_char_password_here
PORT=5000
```

### 3. Install & Start Backend (2 min)
```powershell
cd server
npm install
npm run dev
```

Should show: `✅ Email transporter is ready to send messages`

### 4. Start Frontend (30 sec)
```powershell
# In another terminal
npm run dev
```

### 5. Test It!
- Go to http://localhost:8080
- Fill contact form
- Submit
- Check inbox in 2-3 seconds ✅

## All Done!

Your email backend is now:
- ✅ Receiving form submissions
- ✅ Sending emails directly to edano.cyreljane@gmail.com
- ✅ Validating all inputs
- ✅ Showing user feedback

**Remember:** Keep `server/.env` file private - never commit to GitHub!
