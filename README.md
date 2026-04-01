# 🛍️ Product Cart Web App

A modern and responsive product cart application built with **React.js** and **Tailwind CSS (DaisyUI)**. This project allows users to browse products, add them to a cart, and manage their selections with a smooth and interactive UI.

🔗 **Live Demo:** https://assignment-6-fi.netlify.app/

---

## 📌 Project Description

This project is a fully functional e-commerce-style interface where users can explore different products, view details, and add them to a cart. It includes dynamic state management, interactive UI components, and real-time feedback using toast notifications.

---

## ⚙️ Technologies Used

* ⚛️ React.js
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 📦 JavaScript (ES6+)
* 🔔 React-Toastify
* 📄 JSON (for product data)

---

## 🚀 Features

### 🧭 Navbar

* Designed according to Figma
* Displays cart icon with dynamic item count

### 🎯 Banner

* Includes heading, description, image, and action buttons

### 📊 Stats Section

* Styled based on Figma design

### 🔄 Product & Cart Toggle

* Toggle between **Products** and **Cart**
* Default view: Products
* Cart shows empty message initially

### 🃏 Product Cards

* 3-column responsive layout
* Each card includes:

  * Name, description
  * Price & billing period
  * Tag (popular/new/best seller)
  * Features list
  * Icon
  * Buy Now button

### 🛒 Cart Functionality

* Add/remove products
* Dynamic cart count in navbar
* Displays:

  * Product name
  * Icon
  * Price
* Shows total price
* **Proceed to Checkout** clears cart

### 🔔 Toast Notifications

* Add to cart → success alert
* Remove item → alert
* Checkout → confirmation

### 📱 Responsive Design

* Fully responsive for mobile, tablet, and desktop

---

## 🌟 Key Highlights

* Smooth UI interactions using React state
* Clean and reusable component structure
* Real-time feedback using React-Toastify
* Organized JSON-based product data

---

## ✨ Optional Features Implemented

* ✔️ Cart count updates instantly when adding products
* ✔️ Cart resets after checkout
* ✔️ Button feedback ("Added to cart")
* ✔️ Total price calculation in cart

---

## 📂 Project Structure (Simplified)

```
src/
│── components/
│   ├── Navbar
│   ├── Banner
│   ├── Products
│   ├── Cart
│   ├── Stats
│   ├── Steps
│   ├── Pricing
│   └── Footer
│
│── data/
│   └── products.json
│
│── App.jsx
│── main.jsx
```

---

## 🧠 Learning Outcomes

* Managing global and local state in React
* Handling dynamic UI updates
* Working with JSON data
* Implementing responsive layouts
* Using third-party libraries like React-Toastify

---

## 📌 Future Improvements

* Add user authentication
* Integrate payment gateway
* Add search & filter functionality
* Store cart data in local storage

---

## 🙌 Author

**Asir Mahmud Ishmam**

* 💻 Competitive Programmer & Web Developer

---

⭐ If you like this project, give it a star on GitHub!
