# 🌿 GreenNest – Indoor Plant Care & E-Commerce Platform

**Live Demo:** [https://shadul-greennest.netlify.app/](https://shadul-greennest.netlify.app/)

---

## 📋 Project Overview

**GreenNest** is a modern single-page application designed for indoor plant enthusiasts, combining e-commerce functionality with educational plant care resources. The platform offers a seamless experience for users to explore, purchase, and learn about indoor plants while connecting with gardening experts.

---

## 🎯 Business Value & Purpose

GreenNest addresses the growing interest in indoor gardening and sustainable living by providing:

- **Curated Plant Marketplace** for easy discovery and purchasing
- **Educational Resources** on plant care and maintenance
- **Expert Consultation Services** for personalized guidance
- **Community Building** through user reviews and shared experiences
- **Inspiration** for home decor using indoor plants

---

## ✨ Core Features

### 🔐 Authentication System
- **Multi-method Login** (Email/Password + Google OAuth)
- **Password Recovery** with email reset functionality
- **Profile Management** with photo and name updates
- **Secure Validation** (6+ characters with uppercase/lowercase requirements)

### 🌱 Plant Marketplace
- **Comprehensive Plant Catalog** with 25+ indoor species
- **Detailed Plant Profiles** with care instructions and specifications
- **Advanced Filtering** by ratings and categories
- **Shopping Cart Management** with sorting capabilities

### 👤 User Experience
- **Responsive Design** optimized for all devices
- **Protected Routes** for authenticated features
- **Interactive Plant Details** with consultation booking
- **Smooth Navigation** with React Router

### 🛒 E-Commerce Functionality
- **Shopping Cart System** with add/remove capabilities
- **Price Sorting** (ascending/descending)
- **Purchase Simulation** with success confirmation
- **Stock Management** display

### 🎨 Visual Design
- **Nature-inspired Aesthetic** with green color palette
- **Swiper.js Carousels** for hero banners and testimonials
- **Scroll Animations** using AOS library
- **Loading States** with React Spinners
- **Toast Notifications** for user feedback

---

## 🏗️ Technical Architecture

### Frontend Stack
- **React 19** with modern hooks and functional components
- **React Router v7** for client-side navigation
- **Tailwind CSS** with DaisyUI component library
- **Firebase SDK** for authentication services

### Development Tools & Libraries
| Package | Purpose |
|---------|---------|
| `react` & `react-dom` | Core UI framework |
| `react-router-dom` | Client-side routing |
| `firebase` | Authentication services |
| `axios` | HTTP client for API calls |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Component library |
| `swiper` | Touch-enabled sliders |
| `aos` | Scroll animations |
| `react-hot-toast` | Notification system |
| `react-icons` | Icon library |
| `react-spinners` | Loading components |

### Data Management
- **Local JSON Database** (`plants.json`) with 25+ plant entries
- **Firebase Firestore** (ready for future implementation)
- **Client-side State Management** with React hooks

---

## 📱 Application Structure

### Route Configuration
```
/                   - Homepage with featured sections
/plants             - Complete plant catalog
/plant-details/:id  - Individual plant details (protected)
/cart               - Shopping cart management (protected)
/my-profile         - User profile settings (protected)
/login              - Authentication gateway
```

### Component Hierarchy
```
App
├── Navbar
├── Routes
│   ├── Home
│   │   ├── HeroSlider
│   │   ├── TopRatedPlants
│   │   ├── PlantCareTips
│   │   ├── GreenExperts
│   │   ├── EcoDecorIdeas
│   │   ├── UserReviews
│   │   └── FAQSection
│   ├── Plants
│   │   └── PlantCard
│   ├── PlantDetails
│   │   └── ConsultationForm
│   ├── Cart
│   ├── MyProfile
│   └── Login
└── Footer
```

---

## 🎨 UI/UX Design System

### Color Palette
- **Primary Green**: #22c55e (Nature-inspired)
- **Secondary Greens**: Various shades for hierarchy
- **Neutral Backgrounds**: Light and dark variants
- **Accent Colors**: For CTAs and interactive elements

### Typography Scale
- **Headings**: Bold, nature-inspired font weights
- **Body Text**: Readable sans-serif stack
- **Labels & Captions**: Clear hierarchy system

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Interactive Elements
- **Hover States** with smooth transitions
- **Loading Spinners** during async operations
- **Success Modals** for completed actions
- **Form Validations** with user feedback

---

## 🔒 Security & Authentication

### Protected Routes
- `/plant-details/:id` - Plant information and consultation
- `/cart` - Shopping cart management
- `/my-profile` - User profile settings

### Authentication Flow
1. **Route Protection** checks user authentication status
2. **Automatic Redirect** to login for unauthenticated users
3. **Return URL Preservation** for seamless navigation
4. **Session Persistence** across browser refreshes

---

## 📊 Data Structure

### Plant Object Schema
```javascript
{
  id: Number,
  name: String,
  scientificName: String,
  price: Number,
  rating: Number,
  reviews: Number,
  image: String,
  description: String,
  careLevel: String,        // "Easy", "Moderate", "Difficult"
  lightRequirements: String, // "Low", "Medium", "Bright"
  wateringSchedule: String,  // "Weekly", "Bi-weekly", "Monthly"
  humidity: String,         // "Low", "Medium", "High"
  petFriendly: Boolean,
  airPurifying: Boolean,
  inStock: Boolean,
  stockCount: Number,
  category: String,         // "Succulent", "Foliage", "Flowering"
  size: String,             // "Small", "Medium", "Large"
  benefits: Array<String>   // ["Air Purifying", "Low Maintenance"]
}
```

### User Profile Schema
```javascript
{
  uid: String,
  displayName: String,
  email: String,
  photoURL: String,
  createdAt: Timestamp,
  lastLogin: Timestamp
}
```

---

## 🚀 Deployment Configuration

### Production Environment
- **Frontend Hosting**: Netlify
- **Authentication**: Firebase Auth
- **Asset Delivery**: Optimized through Vite build

### Build Process
```bash
npm run build    # Creates optimized production build
npm run dev      # Starts development server
npm run preview  # Preview production build locally
```

### Environment Variables
```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_firebase_app_id
```

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase project configuration

### Installation Steps

1. **Clone Repository**
   ```bash
   git clone https://github.com/Shadul-Coder/GreenNest.git
   cd greennest
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create `.env` file in root directory:
   ```env
   VITE_apiKey=your_actual_firebase_api_key
   VITE_authDomain=your_project.firebaseapp.com
   VITE_projectId=your_actual_project_id
   VITE_storageBucket=your_project.appspot.com
   VITE_messagingSenderId=your_sender_id
   VITE_appId=your_firebase_app_id
   ```

4. **Data Setup**
   Ensure plant data exists at:
   ```
   public/plants.json
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Access Application**
   Open [http://localhost:5173](http://localhost:5173) in your browser

### Firebase Setup Requirements
1. Create Firebase project in [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication with Email/Password and Google providers
3. Add your domain to authorized domains in Firebase settings
4. Copy configuration values to your `.env` file

---

## 🆘 Support & Resources

For support, questions, or feedback:

- 📧 **Email**: [shadulislam.cse@gmail.com]

---
