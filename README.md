# 📦 SammStore — Premium E-Commerce Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 📝 Description
SammStore is a high-performance Next.js e-commerce platform built with strict **TypeScript** for robust, type-safe data management and seamless scalability. The application features dynamic product filtering, a premium responsive UI, and intuitive navigation built to bridge the gap between cutting-edge technology and everyday accessibility.

---

## ⚙️ How It Works

The application operates on a modern "Client-Server" hybrid architecture using Next.js 15:

1.  **Data Sourcing:** Product information is stored in a centralized `Products.json` file located in the `/public` folder. This simulates a database response for fast, local development.
2.  **Type-Safe Flow:** Custom TypeScript `type` aliases define the structure of a "Product." This ensures that every component (Cards, Pages, Details) receives the correct data (id, title, price, etc.) without runtime errors.
3.  **Dynamic Routing:** When a user clicks a product, Next.js uses **Dynamic Segments** (`/products/[id]`) to pass the ID as a `Promise` to the page. 
4.  **Client-Side Hydration:** The `DetailsPage` component uses the `useEffect` hook to fetch the JSON data and the `.find()` method to extract the specific product matching the URL ID.
5.  **State Management:** React `useState` handles loading animations and product filtering, providing immediate visual feedback to the user during data transitions.



---

## ✨ Key Features

* **Type-Safe Architecture:** Developed using TypeScript `type` aliases to ensure data integrity.
* **Modern UI/UX:** Styled with Tailwind CSS and daisyUI, featuring glassmorphism and smooth micro-interactions.
* **Branded Loading:** Custom `loading.tsx` file provides a professional, animated progress experience during data fetching.
* **Responsive Layout:** A fully fluid design that adapts perfectly to desktop, tablet, and smartphone screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15** | Core React Framework (App Router) |
| **TypeScript** | Static Typing & Strict Data Structures |
| **Tailwind CSS** | Utility-First Styling & Custom Animations |
| **daisyUI** | Premium Component Library |
| **React Hooks** | Advanced State & Effect Management |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/omor244/SAMMSTOR](https://github.com/omor244/SAMMSTOR)
cd samm-store

