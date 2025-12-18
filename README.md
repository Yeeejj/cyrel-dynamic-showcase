# Cyrel Edaño - Dynamic Portfolio

A modern, interactive portfolio website showcasing professional work with a polished UI, theme switching, and email integration.

**Repository**: https://github.com/Yeeejj/cyrel-dynamic-showcase

---

## 📋 Repository Overview

This repository contains a complete, production-ready portfolio application with frontend and backend components.

### Frontend Features
- ✨ **React 18 + TypeScript** - Modern, type-safe UI
- 🎨 **Beautiful Design** - Clean interface with redcity.png background
- 🌙 **Theme Toggle** - Light/Dark mode with smooth transitions
- 📱 **Fully Responsive** - Mobile, tablet, and desktop support
- ⚡ **Performance Optimized** - Memoized components for speed
- 🧩 **Component Library** - shadcn/ui + Radix UI
- 🎯 **Multiple Sections** - About, Services, Projects, Certifications, Contact

### Backend Features
- 📧 **Email Integration** - Gmail SMTP with Nodemailer
- 🔐 **Authentication** - App Password authentication
- ✅ **Error Handling** - Validation and fallback systems
- 🚀 **RESTful API** - Contact form endpoint
- 🔄 **CORS Enabled** - Frontend/backend communication

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Gmail account (for email feature - optional for demo)

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/Yeeejj/cyrel-dynamic-showcase.git
cd cyrel-dynamic-showcase

# Install dependencies
npm install

# Start development server (localhost:8080)
npm run dev

# Build for production
npm run build
```

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install

# Create .env file with your Gmail credentials
# GMAIL_USER=your-email@gmail.com
# GMAIL_APP_PASSWORD=your-app-password
# PORT=5000

# Start email server (localhost:5000)
npm start
```

### Gmail Setup (for email feature)
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Generate a new app password (16-character password)
3. Add to `server/.env`:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
   PORT=5000
   ```

---

## 📁 Project Structure

```
cyrel-dynamic-showcase/
├── src/
│   ├── components/          # React components
│   │   ├── ProjectCard.tsx  # Project display card
│   │   ├── ServiceCard.tsx  # Service card component
│   │   ├── ThemeToggle.tsx  # Light/Dark theme switcher
│   │   ├── TypewriterEffect.tsx # Animated text
│   │   ├── WelcomeScreen.tsx    # Hero section
│   │   └── ui/              # shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx        # Main portfolio page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # App component
│   ├── index.css            # Global styles & animations
│   └── main.tsx             # Entry point
│
├── server/
│   ├── server.js            # Express email API
│   ├── .env                 # Environment variables (not in git)
│   ├── .env.example         # Example env template
│   └── package.json         # Backend dependencies
│
├── public/
│   ├── redcity.png          # Background image
│   ├── favicon.ico          # Site icon
│   └── robots.txt           # SEO robots file
│
├── index.html               # HTML entry point
├── package.json             # Frontend dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS setup
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

---

## 🛠️ Technologies Used

### Frontend Stack
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Vite** | v5.4.21 | Build tool & dev server |
| **React** | v18.3.1 | UI framework |
| **TypeScript** | v5.5.3 | Type safety |
| **Tailwind CSS** | v3.4.11 | Styling framework |
| **shadcn/ui** | Latest | Component library |
| **Radix UI** | Latest | Headless UI primitives |
| **Lucide React** | v0.462.0 | Icon library |
| **React Router** | v6.26.2 | Client routing |

### Backend Stack
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Express.js** | v4.18.2 | Web framework |
| **Nodemailer** | v6.9.7 | Email sending |
| **dotenv** | Latest | Environment management |
| **Node.js** | 16+ | JavaScript runtime |

### Design & Fonts
- **Google Fonts**: Cormorant, Tajawal, Barlow Semi Condensed
- **CSS Animations**: Smooth transitions and effects
- **Background**: redcity.png with 60% opacity overlay
- **Theme Variables**: Custom CSS for light/dark modes

---

## 📧 Email Feature

The portfolio includes a fully functional email system:

### How It Works
1. User submits contact form on the website
2. Frontend sends data to backend API (`/api/send-email`)
3. Backend validates the email using Nodemailer
4. Gmail SMTP sends email to your inbox
5. User receives confirmation message

### Configuration
- **Production Mode**: Uses Gmail App Password authentication
- **Demo Mode**: Falls back to console logging if credentials not set
- **Error Handling**: Detailed error messages for debugging

### API Endpoint
```
POST /api/send-email
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Portfolio Inquiry",
  "message": "I'm interested in your work..."
}
```

---

## 🌐 Deployment

### Frontend Deployment (Vercel - Recommended)
```bash
# 1. Push to GitHub
git push origin main

# 2. Go to vercel.com
# 3. Import your GitHub repository
# 4. Vercel automatically detects Vite configuration
# 5. Deploy - automatically on every push
```

**Result**: Your site will be live at `your-portfolio.vercel.app`

### Backend Deployment (Railway)
```bash
# 1. Go to railway.app
# 2. Create new project from GitHub
# 3. Select your repository
# 4. Add environment variables:
#    - GMAIL_USER
#    - GMAIL_APP_PASSWORD
#    - PORT
# 5. Railway auto-deploys on push
```

**Result**: Backend API at `your-backend.up.railway.app`

### Connect Frontend to Backend
Update the API URL in src/pages/Index.tsx:

```typescript
// Change from localhost:5000 to your deployed backend
const response = await fetch('https://your-backend.up.railway.app/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
})
```

### Custom Domain
All hosting providers support custom domains:
- **Vercel**: Add in Project Settings → Domains
- **Railway**: Add in Project Settings → Domains

---

## 💻 How to Edit This Code

### Option 1: Local Development (Recommended)
```bash
# Clone and set up
git clone https://github.com/Yeeejj/cyrel-dynamic-showcase.git
cd cyrel-dynamic-showcase
npm install

# Make your changes in your IDE
# Start dev server to see changes live
npm run dev

# Commit and push
git add .
git commit -m "Your changes"
git push origin main
```

### Option 2: GitHub Web Editor
- Navigate to the file on GitHub
- Click the pencil icon (✏️) at the top right
- Make edits directly in your browser
- Commit changes

### Option 3: GitHub Codespaces
- Click the "Code" button on GitHub
- Select "Codespaces" tab
- Click "New codespace"
- Edit in browser-based VS Code
- Changes auto-commit and push

---

## 📚 Key Files & What They Do

| File | Purpose |
|------|---------|
| src/pages/Index.tsx | Main portfolio page - edit content here |
| src/index.css | Global styles, theme colors, animations |
| src/components/ThemeToggle.tsx | Light/Dark theme switcher |
| server/server.js | Express backend for email |
| tailwind.config.ts | Tailwind CSS configuration |
| vite.config.ts | Vite build configuration |

---

## 🔧 Available Commands

### Frontend Commands
```bash
npm run dev       # Start development server (localhost:8080)
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

### Backend Commands
```bash
npm start         # Start email server (localhost:5000)
npm run dev       # Start with nodemon (auto-restart)
```

---

## 🐛 Troubleshooting

### Email Not Sending
- ✅ Check Gmail credentials in `server/.env`
- ✅ Verify Gmail App Password (not regular password)
- ✅ Ensure backend server is running on localhost:5000
- ✅ Check browser console for error messages

### Port Already in Use
- Kill process on port 8080 (frontend)
- Kill process on port 5000 (backend)
- Then restart npm run dev

### Theme Not Working
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Check that `ThemeToggle.tsx` is mounted in layout
- ✅ Verify CSS variables in `index.css`

---

## 📄 License

This project is personal use only. Feel free to fork and customize!

---

## 🤝 Support

For questions or issues:
1. Check [GitHub Issues](https://github.com/Yeeejj/cyrel-dynamic-showcase/issues)
2. Review the troubleshooting section above
3. Check terminal/console for error messages

---

**Created with ❤️ by Cyrel Edaño**

Last updated: December 18, 2025
