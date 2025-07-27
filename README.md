# 🛒 E-Commerce Store

## 📝 Project Overview

This is a modern e-commerce store built with **React**, **Vite**, and **React Query**. It displays products fetched from the [Fake Store API](https://fakestoreapi.com/), with features such as:

- Product listing & detail pages
- Filter & Sorting products
- Shopping cart (Add,Remove and Update)
- Cart persistence using `localStorage`
- Theme switching (Light/Dark)
- React Query DevTools for API state debugging

---

## 🖼️ Screenshots / Demo

### Home Page

./src/assets/screenshots/Home-Light.png
./src/assets/screenshots/Home-dark.png

### Product Details

./src/assets/screenshots/Product-Details-and-SearchBar

### Cart Page

./src/assets/screenshots/Cart-dark.png

### Live Demo:

[https://e-commerce-store-ten-sepia.vercel.app/]

---

## 🧱 Tech Stack Used

| Category         | Tools                    |
| ---------------- | ------------------------ |
| Frontend         | React, Vite              |
| Styling          | Tailwind CSS             |
| Icons            | Fontawesome              |
| Routing          | React Router             |
| State Management | React Context + useState |
| API Handling     | Axios + React Query      |
| Persistence      | localStorage             |
| DevTools         | React Query Devtools     |
| Deployment       | Vercel                   |

---

## 📁 Folder Structure (Simplified)

```
src/
├── components/
│   └── Layout, Navbar, Products, Footer, Loader
├── context/
│   ├── ProductFilterContext/
│   └── ThemeContext/
|   |__ CartContext/
├── pages/
│   ├── Home/
│   ├── ProductDetails/
│   └── Cart/
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🙌 Author

**Mohamed Emad Hamdy Dawood**

Feel free to contribute or fork the project!
