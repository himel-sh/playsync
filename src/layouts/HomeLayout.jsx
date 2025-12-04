import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </header>
      <main className="min-h-screen max-w-7xl w-11/12 mx-auto mt-4">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
