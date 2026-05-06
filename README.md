# Sonu Singh — Portfolio Website

A production-grade developer portfolio built with React, Node.js, Express, and PostgreSQL.

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express.js, PostgreSQL (pg), Nodemailer
- **Database**: PostgreSQL (via Neon in production)
- **Deployment**: Vercel (frontend) + Render (backend) + Neon (DB)

## 📁 Project Structure
```
portfolio/
├── frontend/          # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/           # Node.js + Express API
│   ├── config/
│   │   └── db.js           # PostgreSQL connection + init
│   ├── controllers/
│   │   └── contactController.js
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── DEPLOYMENT_GUIDE.md
```

## 🚀 Quick Start

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages |
| POST | `/api/contact/track` | Track page view |

## 🌐 Deploy
See `DEPLOYMENT_GUIDE.md` for step-by-step instructions.
