import React from "react";
import Navbar from "../components/home/Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="mx-auto min-h-screen  ">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
