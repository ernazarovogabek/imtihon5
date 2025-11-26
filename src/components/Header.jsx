import React, { useState } from "react";
import Logo from "../img/Logo.png";
import { NavLink } from "react-router-dom";
import Fr from '../img/Fr.png';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full shadow bg-white">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center py-4 px-4">
          <img src={Logo} alt="logo" className="w-[70px]" />
          
          
          <ul className="hidden md:flex gap-10 text-[18px]">
            <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/products">Products</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/blog">Blog</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/faq">Faq</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/contactus">Contactus</NavLink>
          </ul>

          <div className="hidden md:flex gap-6 text-[20px]">
            <i className="fa-regular fa-heart cursor-pointer"></i>
            <i className="fa-solid fa-basket-shopping cursor-pointer"></i>
            <i className="fa-regular fa-user cursor-pointer"></i>
          </div>

         
          <button
            className="md:hidden text-[28px]"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

     
        <div
          className={`md:hidden bg-white border-t transform transition-all duration-300 ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col text-center gap-4 p-4 text-[18px]">
            <li>
              <NavLink to="/" className="block cursor-pointer" onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="block cursor-pointer" onClick={() => setOpen(false)}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="block cursor-pointer" onClick={() => setOpen(false)}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="block cursor-pointer" onClick={() => setOpen(false)}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className="block cursor-pointer" onClick={() => setOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="flex gap-6 justify-center text-[22px] p-4 border-t">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-basket-shopping"></i>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
      </div>

     
      <section className="bg-white border-t-2 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Tech Heim
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
              "Join the <span className="text-orange-500 font-semibold">digital revolution</span>"
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300">
              Explore More
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={Fr}
              alt="Two laptops with colorful screens"
              className="max-w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;