# 🍃 GreenNest – Indoor Plant Care & Store

**Live Site URL:** https://shadul-greennest.netlify.app/  

---

## 🌱 Project Overview

**GreenNest** is a single-page web application built for indoor plant enthusiasts. It provides a seamless experience to **explore, buy, and learn about plant care**. Users can browse plants, view detailed plant information, manage their profiles, and even book expert consultations — all within a clean, nature-inspired interface.

---

## 🎯 Project Purpose

The main goal of this project is to create a **responsive, interactive, and user-friendly SPA (Single Page Application)** using **React and Firebase**.  
It combines functionality and design to promote a **green lifestyle** while showcasing core web development concepts such as routing, authentication, and data fetching.

---

## 🧩 Core Features

### 🔹 General Features
- Elegant single-page design with **React Router**.
- Fully responsive layout built with **Tailwind CSS + DaisyUI**.
- Smooth navigation without reloads.
- Persistent **Navbar** and **Footer** across routes.

### 🔹 Authentication (Firebase)
- **Email & Password Login/Signup**
- **Google Sign-In**
- **Forgot Password** (Email reset link)
- **Update Profile** (Name & Photo)
- Password validation: 
  - At least 6 characters  
  - Must include uppercase and lowercase letters

### 🔹 Data & Functional Pages
- **Plants Page:**  
  Fetches plant data from a local JSON file (`plants.json`) containing 25 indoor plants.  
  Each card displays name, image, price and rating.

- **Plant Details Page (Protected Route):**  
  - Displays full plant info (image, description, price, stock, etc.)
  - Accessible only when logged in.
  - Includes a **Book Consultation Form** with success toast on submission.

- **My Profile Page:**  
  Shows user info and allows real-time updates via `updateProfile()`.

### 🔹 Home Page Sections
1. **Hero Slider:** Built with **Swiper.js** (smooth nature-inspired slides).  
2. **Top Rated Indoor Plants:** Display fetched data from JSON.  
3. **Plant Care Tips:** Helpful watering, sunlight, and fertilizing advice.  
4. **Meet Our Green Experts:** Showcases 3 specialists.  
5. **Eco Decor Ideas:** Styling inspiration using plants.  
6. **User Reviews:** Swiper slider showing user feedback.  
7. **FAQ Section:** Frequently asked plant care and purchase questions.

### 🔹 Cart System
- Private route (visible only when logged in).  
- Add, view, and manage plants in cart.  
- Sort plants by price (ascending/descending).  
- Fake purchase functionality with success modal.  
- Cart icon conditionally visible based on authentication.

---

## 🔒 Protected Routes

- **/plant-details/:id**
- **/my-profile**
- **/cart**

If the user is unauthenticated, they’ll be redirected to the **Login Page**, and then back to their intended route after successful login.

---

## ⚙️ Technologies & Tools Used

### 🖥️ Frontend
- **React 19**
- **React Router v7**
- **Tailwind CSS**
- **DaisyUI**
- **Swiper.js**
- **AOS**
- **React Icons**
- **React Hot Toast**
- **React Spinners**

### 🔥 Backend / Authentication
- **Firebase Authentication**

### ⚙️ Other Utilities
- **Axios** (for data fetching)
- **Vite** (for build & development)

---

## 📦 NPM Packages Used

| Package | Purpose |
|----------|----------|
| `react` | Core React library |
| `react-dom` | DOM rendering |
| `react-router` | SPA routing |
| `firebase` | Authentication & hosting |
| `axios` | Data fetching |
| `swiper` | Image slider |
| `aos` | Scroll animations |
| `react-hot-toast` | Toast notifications |
| `react-icons` | Icons library |
| `react-spinners` | Loading animations |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind UI components |
| `@tailwindcss/vite` | Tailwind with Vite integration |
