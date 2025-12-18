# Gmail App Password Setup

To send emails through this backend service, you need to create a Gmail App Password:

## Steps to Create Gmail App Password:

1. **Enable 2-Factor Authentication** (if not already enabled):
   - Go to https://myaccount.google.com/
   - Click "Security" in the left sidebar
   - Enable "2-Step Verification" if not already enabled

2. **Create App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password

3. **Create `.env` file** in the `server/` directory:
   ```
   GMAIL_USER=edano.cyreljane@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password_here
   PORT=5000
   ```

4. **Install dependencies**:
   ```bash
   cd server
   npm install
   ```

5. **Start the server**:
   - Development: `npm run dev`
   - Production: `npm start`

The server will run on `http://localhost:5000` by default.

## API Endpoint

**POST** `/api/send-email`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

Response on success:
```json
{
  "success": true,
  "message": "Email sent successfully! I will get back to you soon."
}
```

## Deployment (Optional)

For production deployment, you can use:
- **Railway** (recommended for Node.js apps)
- **Vercel** (with serverless functions)
- **Render**
- **Heroku**

After deployment, update the frontend API URL from `http://localhost:5000` to your production URL.
