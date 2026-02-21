# ☕ Coffee With Corporates — Complete Setup Guide

This guide covers everything from a fresh machine to a fully running instance.

---

## Table of Contents

1. [System Requirements](#1-system-requirements)
2. [Database Setup](#2-database-setup)
3. [Backend Setup](#3-backend-setup)
4. [Frontend Setup](#4-frontend-setup)
5. [Running the Application](#5-running-the-application)
6. [Initial Configuration](#6-initial-configuration)
7. [Production Deployment](#7-production-deployment)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. System Requirements

| Software | Minimum Version | Check Command |
|----------|----------------|---------------|
| Node.js  | 20.x           | `node --version` |
| npm      | 10.x           | `npm --version` |
| MongoDB  | 6.x            | `mongod --version` |
| Git      | 2.x            | `git --version` |

### Install Node.js (if not installed)

**Windows/macOS:** Download from [nodejs.org](https://nodejs.org)

**Ubuntu/Debian:**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install MongoDB (if not installed)

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Ubuntu:**
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongod
sudo systemctl enable mongod
```

**Windows:** Download [MongoDB Community Server](https://www.mongodb.com/try/download/community)

---

## 2. Database Setup

### Option A: Local MongoDB
```bash
# Start MongoDB (runs on mongodb://localhost:27017)
mongod
```

### Option B: MongoDB Atlas (Cloud - Free Tier)

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free account and cluster
3. Get your connection string:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/coffee-with-corporates
   ```
4. Use this string as your `DATABASE` env variable

---

## 3. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
```

### Edit `backend/.env`

```env
# Server
PORT=8888
NODE_ENV=development

# Database (choose one)
DATABASE=mongodb://localhost:27017/coffee-with-corporates
# DATABASE=mongodb+srv://user:pass@cluster.mongodb.net/coffee-with-corporates

# Security (CHANGE THIS — use a long random string)
JWT_SECRET=change_this_to_a_very_long_random_string_at_least_32_chars

# Email (get free key from resend.com)
RESEND_API=re_your_resend_key_here
MAIL_FROM=noreply@yourdomain.com

# Public URL (for file links in PDFs and emails)
PUBLIC_SERVER_FILE=http://localhost:8888/

# CORS (comma-separated list of allowed frontend origins)
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

### Seed the database

```bash
npm run setup
```

**Output you should see:**
```
✅ MongoDB connected.
👍 Admin created : Done!
👍 Settings created : Done!
👍 Taxes created : Done!
👍 Payment Modes created : Done!
🎉 Setup complete!
```

### Default Admin Credentials
| Field | Value |
|-------|-------|
| Email | `admin@demo.com` |
| Password | `admin123` |

> ⚠️ Change these in the admin profile settings after first login.

---

## 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
```

### Edit `frontend/.env`

```env
# Backend server URL (must end with /)
VITE_BACKEND_SERVER=http://localhost:8888/

# File base URL for serving uploads
VITE_FILE_BASE_URL=http://localhost:8888/

# For remote development (optional)
# VITE_DEV_REMOTE=remote
```

---

## 5. Running the Application

### Development Mode (recommended for local use)

Open **two terminal windows**:

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
```
Server starts at: `http://localhost:8888`

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
```
App opens at: `http://localhost:3000`

### Verify it's working

1. Open `http://localhost:3000`
2. Login with `admin@demo.com` / `admin123`
3. You should see the Dashboard with the Coffee With Corporates sidebar

---

## 6. Initial Configuration

After first login, configure your instance:

### Company Settings
**Settings → Company Settings**
- Company name, address, registration number
- Contact email and phone

### Logo
**Settings → Company Logo**
- Upload your company logo (PNG/JPG, max 10MB)

### Currency
**Settings → Money Format**
- Select your currency symbol (₹, $, €, etc.)
- Set decimal/thousand separators
- Choose currency position

### Language & Date Format
**Settings → General Settings**
- Select language (English, Hindi, Telugu, etc.)
- Choose date format (DD/MM/YYYY, MM/DD/YYYY, etc.)
- Set company timezone and country

### Finance Settings
**Settings → Finance Settings**
- Starting invoice number
- Starting quote number
- Invoice/quote prefixes

### Taxes
**Configuration → Taxes**
- Add applicable tax rates (e.g., GST 18%, GST 5%)

### Payment Modes
**Configuration → Payment Modes**
- Add payment methods (UPI, Bank Transfer, Card, Cash)

---

## 7. Production Deployment

### Build the frontend
```bash
cd frontend
npm run build
# Produces: frontend/dist/
```

### Set production environment

**`backend/.env`:**
```env
NODE_ENV=production
DATABASE=mongodb+srv://...  # Use Atlas or a proper MongoDB instance
JWT_SECRET=your_very_secure_secret_min_64_chars
PUBLIC_SERVER_FILE=https://your-domain.com/
ALLOWED_ORIGINS=https://your-domain.com
```

### Serve with Nginx

**`/etc/nginx/sites-available/coffee-erp`:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend (built static files)
    location / {
        root /path/to/project/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8888;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Downloads
    location /download {
        proxy_pass http://localhost:8888;
    }

    # Public files
    location /public {
        proxy_pass http://localhost:8888;
    }
}
```

### Use PM2 for process management
```bash
npm install -g pm2

cd backend
pm2 start src/server.js --name "coffee-erp-backend"
pm2 save
pm2 startup
```

### Enable SSL with Certbot
```bash
sudo certbot --nginx -d your-domain.com
```

---

## 8. Troubleshooting

### Backend won't start

**Error: MongoDB connection failed**
```bash
# Check MongoDB is running
sudo systemctl status mongod
# Start it
sudo systemctl start mongod
```

**Error: Port 8888 already in use**
```bash
# Find and kill the process
lsof -i :8888
kill -9 <PID>
```

### Frontend shows 502/503 errors

This means the backend isn't running or the proxy can't reach it.

```bash
# Check backend is running
curl http://localhost:8888/api/setting/list
# Should return JSON, not an error
```

### "Invalid or not defined" notification

Usually caused by a missing or failed API response. Check:
1. Backend console for error messages
2. Browser Network tab for the failing API call
3. That you've run `npm run setup` to seed the database

### PDF download not working

html-pdf requires PhantomJS which can be difficult to install. To check:
```bash
cd backend
node -e "const pdf = require('html-pdf'); console.log('OK')"
```

If it fails, the system will fall back to HTML output that you can print using browser's Print → Save as PDF.

### Reset everything and start fresh

```bash
cd backend
npm run reset   # Wipes database
npm run setup   # Re-seeds database
```

### Settings not loading (blank settings page)

This usually means the settings weren't seeded. Run:
```bash
cd backend && npm run setup
```
If already seeded, check the browser console for API errors.

---

## 📞 Support

- **Developer:** Katepally Prashanth Goud
- **Email:** prashanthit8074@gmail.com  
- **GitHub:** [github.com/prashanth2612](https://github.com/prashanth2612)
- **LinkedIn:** [linkedin.com/in/prashanth-goud](https://linkedin.com/in/prashanth-goud)
