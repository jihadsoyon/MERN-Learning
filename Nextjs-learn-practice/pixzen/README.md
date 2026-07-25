# 🎨 Pixgen - AI Art Showcase & Gallery Platform

Pixgen is a modern Full-Stack web application built with Next.js 15, designed for showcasing and exploring stunning AI-generated artwork. It features high-quality visuals, multi-category filtering, robust authentication, and dynamic route protections to deliver a seamless user experience.

🚀 **Live Link:** https://mern-learning-phi.vercel.app/

---

## ✨ Features

- **🔐 Route Protection (Middleware-driven):** 
  - Guests can browse the landing page and view limited gallery listings.
  - Clicking on an artwork's **View Details** or navigating to the **Profile** section automatically redirects unauthenticated users to the Sign-In page.
- **🌐 Better-Auth Authentication:** 
  - Standard Credentials-based **Sign-Up** and **Sign-In** forms with frontend validation.
  - **Sign In with Google** integration for hassle-free social onboarding.
  - Secure **Account Linking** to prevent duplicate identity exploits under the same email.
- **🏷️ Dynamic Category Filtering:** Fully responsive sub-navigation tabs (`Sci-Fi`, `Pixel Art`, `Fantasy`, `Cyberpunk`, etc.) to instantly isolate artwork styles.
- **👤 Dynamic User Profile:** Authenicated users can view their current metrics, check saved imagery, and dynamically trigger a sleek **Update Profile Modal** to edit biographical tokens like Names or Avatar URLs.
- **⚡ Performance First:** Powered by Next.js App Router for optimized server-side data fetching and static asset caching.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS, Lucide React Icons
- **Backend:** Next.js Route Handlers (API Routes)
- **Database:** MongoDB Atlas (NoSQL) via official Node native drivers
- **Authentication:** Better-Auth (`better-auth/client` & `better-auth/next-js`)
- **Hosting/Deployment:** Vercel (Production Build optimized)

---

## ⚙️ Local Installation & Setup

Follow these steps to run **Pixgen** on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com
cd MERN-Learning/Nextjs-learn-practice/pixzen
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root of the `pixzen` directory and supply the following variables:

```env
# Better-Auth Configuration
BETTER_AUTH_SECRET=your_generated_random_jwt_secret_string
BETTER_AUTH_URL=http://localhost:3000

# Database Connectivity
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xadpulf.mongodb.net/pixzen?appName=Cluster0

# Social Authentication Providers (Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_oauth_client_://googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret_key
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🚀 Deployment

The project is configured for continuous delivery via **Vercel CLI**:

1. **Verify Builds Locally:**
   ```bash
   npm run build
   ```
2. **Push directly to Vercel Production Environment:**
   ```bash
   vercel --prod
   ```

---
