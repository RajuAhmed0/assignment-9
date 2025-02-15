import React from 'react';import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-700 flex items-center">
              <span className="text-green-600">H</span>olity
            </span>
            <span className="text-xs text-gray-500 ml-2">SOCIAL SUPPORT</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600 border-b-2 border-red-400 pb-1">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">About</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Support Us</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Events</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contacts</a>
          </div>
          
          {/* Donate Button */}
          <div className="hidden md:flex">
            <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-md">Donate</button>
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
        <div className="md:hidden bg-white shadow-md p-4 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-green-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-green-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-green-600">Support Us</a>
          <a href="#" className="block text-gray-700 hover:text-green-600">Events</a>
          <a href="#" className="block text-gray-700 hover:text-green-600">Contacts</a>
          <button className="w-full bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-md">Donate</button>
        </div>
      )}
    </nav>
        </div>
    );
};

export default Navbar;