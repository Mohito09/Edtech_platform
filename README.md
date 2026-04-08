# StudyNotion Edtech Project
# 📚 StudyNotion - Full Stack EdTech Platform (MERN)

A fully functional **EdTech platform** where users can **learn, create, and sell courses**.

Built using the **MERN Stack (MongoDB, Express, React, Node.js)** with modern tools and integrations.

---

## 📖 Overview

StudyNotion provides:

- 🎓 Students → Browse & purchase courses
- 👨‍🏫 Instructors → Create & manage courses
- 💳 Payments → Secure checkout using Razorpay
- ⭐ Reviews → Course rating system

---

## 🏗️ Tech Stack

### Frontend
- React.js ⚛️
- Redux Toolkit
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Integrations
- Cloudinary (Media Upload)
- Razorpay (Payments)
- JWT (Authentication)

---

## 📂 Project Structure

```
FINAL SS/
│
├── server/
│ ├── config/ # DB, Cloudinary, Razorpay configs
│ ├── controllers/ # Business logic
│ ├── middleware/ # Auth middleware
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes
│ ├── utils/ # Helpers (image upload, mail, etc.)
│ ├── mail/templates/ # Email templates
│ ├── index.js # Entry point
│ └── .env # Environment variables
│
├── src/
│ ├── components/ # UI components
│ │ ├── core/ # Main features (Catalog, Course, Dashboard)
│ │ ├── Common/ # Shared components
│ │
│ ├── pages/ # Page routes
│ ├── services/ # API calls
│ ├── slices/ # Redux slices
│ ├── reducer/ # Root reducer
│ ├── utils/ # Helper functions
│ ├── data/ # Static data
│ ├── hooks/ # Custom hooks
│ └── App.js # Main App
│
└── README.md

```


---

## 🔑 Features

### 👨‍🎓 Student
- Browse courses
- Add to cart
- Buy courses
- Watch lectures
- Rate & review courses

### 👨‍🏫 Instructor
- Create courses
- Upload videos
- Manage content
- Track performance

### 🔐 Authentication
- Signup/Login
- OTP verification
- JWT-based auth

### 💳 Payments
- Razorpay integration
- Secure checkout flow

### ☁️ Media
- Cloudinary for video/image uploads

---

## 🔌 API Endpoints

### 🔐 Auth

POST /api/auth/signup
POST /api/auth/login
POST /api/auth/verify-otp
POST /api/auth/forgot-password


### 📚 Courses

POST /api/v1/course/createCourse
POST /api/v1/course/editCourse
GET /api/v1/course/getAllCourses
POST /api/v1/course/getCourseDetails


### 💳 Payments

POST /api/v1/payment/capturePayment
POST /api/v1/payment/verifyPayment


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/studynotion.git
cd studynotion

# Backend
cd server
npm install

# Frontend
cd ../
npm install

3️⃣ Setup Environment Variables

Create .env inside server/

PORT=4000
MONGODB_URL=your_mongo_url
JWT_SECRET=your_secret

CLOUDINARY_NAME=your_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret

4️⃣ Run Project
# Start Backend
cd server
npm start

# Start Frontend
cd ..
npm start

🧠 Key Concepts Used
REST API Architecture
Redux State Management
JWT Authentication
File Upload Handling
Payment Gateway Integration
Protected Routes
🚀 Future Enhancements
Live classes 🎥
Chat system 💬
AI course recommendations 🤖
Admin dashboard 🛠️

