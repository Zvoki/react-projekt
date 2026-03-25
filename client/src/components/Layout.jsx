// src/components/Layout.jsx
// This component serves as the main layout for the application. It includes a 
// header, a footer, and a main content area where the specific page content 
// will be rendered based on the route.

import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import SmallIcons from "../components/SmallIcons";
import "../styles/layout.css";
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <SmallIcons />
      <Footer />
    </>
  );
}
