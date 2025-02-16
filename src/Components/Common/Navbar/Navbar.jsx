import React from 'react'; import { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md w-full fixed inset-x-0 top-0 z-30">
        <div className="max-w-[1320px] xl:mx-auto mx-2 ">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img src='/img/logo.png' alt="" className='w-14' />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <NavLink to={"/"} className={({ isActive }) =>
                `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
              }>Home</NavLink>
              <NavLink to={"/donation"} className={({ isActive }) =>
                `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
              }>Donation Campaigns</NavLink>
              <NavLink to={"/howtohelp"} className={({ isActive }) =>
                `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
              }>How to Help</NavLink>
              <NavLink to={"/dashboard"} className={({ isActive }) =>
                `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
              }>Dashboard</NavLink>

            </div>

            {/* Donate Button */}
            <div className="hidden md:flex">
              <button className="bg-orange-600 hover:bg-orange-400 text-white px-4 py-2 rounded-md">Donate</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                <Menu className="text-gray-700 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md p-4 flex flex-col">
            <NavLink to={"/"} className={({ isActive }) =>
              `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
            }>Home</NavLink>
            <NavLink to={"/donation"} className={({ isActive }) =>
              `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
            }>Donation Campaigns</NavLink>
            <NavLink to={"/howtohelp"} className={({ isActive }) =>
              `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
            }>How to Help</NavLink>
            <NavLink to={"/dashboard"} className={({ isActive }) =>
              `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
            }>Dashboard</NavLink>
            <button className="w-full bg-orange-600 hover:bg-orange-400 text-white px-4 py-2 mt-2 rounded-md">Donate</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;