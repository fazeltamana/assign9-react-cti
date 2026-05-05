# 🛍️ Denis Store — Product Store App

## 📌 Overview

Denis Store is a modern product store application built with React.
The app demonstrates practical usage of **Context API, useReducer, Redux Toolkit, and React Query** by combining them into a single scalable project.

Users can browse products, search and filter them, view details, and manage a shopping cart with a smooth UI experience.

---

## ✨ Features

### 🧠 State Management

* Context API + useReducer for global UI settings

  * Dark / Light theme
  * Product filtering (category, search, sort)
* Redux Toolkit for cart management

  * Add / remove items
  * Increase / decrease quantity
  * Clear cart
  * Total items & total price

### 🌐 Data Fetching

* React Query for API handling

  * Fetch product list from API
  * Caching and optimized re-fetching
  * Loading and error states

### 🛒 Shopping Experience

* Product listing with filtering and sorting
* Product details page
* Cart drawer + full cart page
* Fake checkout page

### 🎨 UI & UX

* Responsive modern UI (Tailwind CSS)
* Dark / Light mode support
* Smooth transitions and hover effects
* Clean component-based structure

---

## 🧱 Tech Stack

* **React (Functional Components)**
* **Redux Toolkit**
* **React Query (@tanstack/react-query)**
* **Context API + useReducer**
* **React Router**
* **Tailwind CSS**

---

## 📂 Project Structure

```
src/
 ├── app/                # Redux store
 ├── features/
 │    └── cart/         # Cart slice (Redux Toolkit)
 ├── context/           # Context + useReducer (settings)
 ├── components/        # Reusable UI components
 ├── pages/             # App pages (Home, Cart, etc.)
 ├── services/          # API logic (React Query)
 └── App.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd your-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 🌐 API Used

* Fake Store API
  https://fakestoreapi.com/products

---

## 📸 Demo Link

> Demo linK: 
https://github.com/user-attachments/assets/4fcf4258-a439-40ed-b437-88a0f73564af


---

## 🎯 Learning Outcomes

This project demonstrates:

* Separation of concerns in state management
* Efficient API handling with React Query
* Scalable global state using Redux Toolkit
* Clean UI state management using Context + useReducer
* Component-based UI architecture

---

## 🔮 Future Improvements

* Real checkout integration
* User authentication
* Product reviews & ratings
* Pagination / infinite scroll
* Wishlist feature

---

## 📄 License

This project is for educational purposes.
