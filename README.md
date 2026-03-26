# React E‑commerce Project

A full‑stack e‑commerce application built as part of my frontend development studies.
The project demonstrates skills in React, Express, REST API design, routing, database work, and deployment to Render.

## Live Demo

Frontend (User Interface)
https://react-projekt-frontend.onrender.com
Admin Panel
https://react-projekt-frontend.onrender.com/admin/products 
(Admin UI built in React – no login required for demo purposes)
Backend API
https://react-projekt-yw6b.onrender.com
Example API endpoints:
Popular products:
https://react-projekt-yw6b.onrender.com/products/popular (react-projekt-yw6b.onrender.com in Bing) 
All products (admin):
https://react-projekt-yw6b.onrender.com/admin/products 

## Features

User-facing
Browse products on the home page
View product details
Search for products
Clean and responsive layout
Admin Panel
View all products in a table.
Add a new product (name, description, price, SKU)
Automatic slug generation
Price formatting and validation
Backend
REST API built with Express
SQLite database
Controllers, routes, and query separation
CORS configured for production
Slug initialization on startup

## Responsive Design

The application is fully responsive and optimized for three key screen sizes:
< 640px — Mobile devices
Simplified layout
Vertical stacking of elements
Adjusted typography and spacing for small screens
≥ 640px — Tablets and small laptops
Two‑column layout where appropriate
Larger product images
Improved navigation and spacing
≥ 1024px — Desktop screens
Full‑width layout
Grid‑based product display (e.g., 4×2 products)
Expanded admin panel layout for better usability
Responsiveness is implemented using CSS media queries, flexbox, and grid to ensure a consistent and user‑friendly experience across all devices.

## Tech Stack

Frontend
React 18
Vite
React Router
CSS modules
Backend
Node.js
Express
SQLite
Render (Static Site + Web Service)
Environment variables
Production CORS setup

## Project Structure

client/        # React frontend
   src/
      components/
      pages/
      styles/
      utils/

server/        # Express backend
   controllers/
   routes/
   db/
   server.js

## Running Locally

1. Clone the repository
git clone <repo-url>
cd react-projekt
2. Start the backend
cd server
npm install
npm start
3. Start the frontend
cd client
npm install
npm run dev
Frontend: http://localhost:3000
Backend: http://localhost:8000

## Purpose of the Project

This project was created as part of my education at EC Utbildning to demonstrate:
ability to build a full-stack application
understanding of React and component architecture
REST API design with Express
database work with SQLite
deployment of both frontend and backend
problem‑solving and debugging skills
It is included in my portfolio for internship (LIA) applications.

## Contact

Zvonimir Juric
Frontend Developer Student EC Utbildning
Mobile: +46 76 58 06 343
Email: zvonimir.juric@utb.ecutbildning.se
Fridlevstad, Sweden
