# 🛍️ Odyssey — Premium E-Commerce Platform

> **Discover. Desire. Own.**  
> A modern, curated lifestyle e-commerce experience built with performance, clean UI, and scalable architecture in mind.

# 🎥 Project Walkthrough

Watch the complete walkthrough covering architecture, UI, responsiveness, features, and development flow.

<p align="center">
  <a href="https://www.youtube.com/watch?v=Ka0TNr2RRYA">
    <img 
      src="https://i.ibb.co.com/RT3wLrXr/odyseey-pre-tempalte.pngg" 
      alt="Odyssey Project Walkthrough"
      width="100%"
    />
  </a>
</p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=Ka0TNr2RRYA">
    ▶️ Watch Full Video on YouTube
  </a>
</p>

---


## ✨ Key Features

### 🔐 Firebase Authentication

- Email & Password Authentication
- Google OAuth Integration
- Persistent Login Sessions

### 🛍️ Dynamic Product Catalog

- Product Search Functionality
- Multi-filtering System
  - Category
  - Price
  - Rating
- Responsive Product Grid

### ➕ Product Management (Protected)

- Add New Products
- Manage Existing Products
- Delete Products
- Real-time Firebase Updates

### 🔒 Protected Routes

- Authentication-based Access Control
- Middleware + Client-side Route Protection

### 💾 State Management

- Zustand Global Store
- Persistent Storage Support

### 🎬 Smooth UI & Interactions

- Framer Motion Animations
- Micro-interactions for Enhanced UX
- Smooth Hover & Transition Effects

### 📱 Fully Responsive Design

- Mobile-first Architecture
- Optimized for:
  - Mobile
  - Tablet
  - Laptop
  - Desktop

---

## 🛣️ Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with multiple sections |
| `/items` | Public | Product listing with filtering |
| `/items/[id]` | Public | Product details page |
| `/items/add` | 🔒 Auth | Add new product |
| `/items/manage` | 🔒 Auth | Manage all products |
| `/about` | Public | About page |
| `/login` | Public | User login |
| `/register` | Public | User registration |

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/engsiam/Odyssey-Premium-E-Commerce-Platform.git

cd Odyssey-Premium-E-Commerce-Platform
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=

NEXT_PUBLIC_FIREBASE_PROJECT_ID=

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=

NEXT_PUBLIC_FIREBASE_APP_ID=
```

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

---

### 5️⃣ Open in Browser

```bash
http://localhost:3000
```

---

## 🔥 Firebase Setup

1. Open Firebase Console
2. Create a New Firebase Project
3. Enable Authentication
   - Email/Password
   - Google Sign-In
4. Copy Firebase Config
5. Paste Credentials into `.env.local`
6. Add Authorized Domains:
   - `localhost`
   - Production URL

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|-------------|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Authentication | Firebase Auth |
| State Management | Zustand |

---

## 📦 Project Highlights

- Scalable Folder Architecture
- Reusable UI Components
- Clean Design System
- Responsive Layout System
- Optimized User Experience
- Production-ready Structure
- Modern Frontend Best Practices

---

## 🌐 Live Demo

👉 **Live Website**  
https://odyssey-premium-e-commerce-platform.vercel.app/

---

## 🧠 Developer Notes

This project extends beyond basic requirements by implementing:

- Real-world product management workflow
- Modern global state management using Zustand
- Responsive-first UI architecture
- Smooth motion and interaction system
- Clean component-driven development structure

---

## 📄 License

This project is built for educational, assessment, and portfolio purposes.

---

## ⭐ Support

If you like this project, consider giving it a star on GitHub.
