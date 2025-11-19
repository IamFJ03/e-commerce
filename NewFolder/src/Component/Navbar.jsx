import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="text-white shadow-md z-50 font-mont" style={{backgroundColor:"#052E16"}}>
      <div className="flex justify-between items-center px-6 md:px-16 py-3">
        
        <div className="flex items-center relative">
          <div className="bg-white h-10 w-10 rounded-full mr-2"></div>
          <img src={Logo} alt="Logo" className="h-14 relative -ml-14 w-full" />
        </div>

        
        <ul className="hidden md:flex items-center text-lg gap-10">
          <li
            className="cursor-pointer hover:text-green-300 transition-all"
            onClick={() => scrollToSection("product")}
          >
            Our Products
          </li>
          <li
            className="cursor-pointer hover:text-green-300 transition-all"
            onClick={() => scrollToSection("service")}
          >
            Services
          </li>
          <li
            className="cursor-pointer hover:text-green-300 transition-all"
            onClick={() => scrollToSection("about")}
          >
            Why Us?
          </li>
          <li
            className="cursor-pointer hover:text-green-300 transition-all"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </li>
        </ul>

       
        <div className="md:hidden">
          {open ? (
            <X size={30} onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={30} onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{backgroundColor:"#14532D"}}
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-5 text-lg">
          <li
            className="cursor-pointer hover:text-green-300"
            onClick={() => scrollToSection("product")}
          >
            Our Products
          </li>
          <li
            className="cursor-pointer hover:text-green-300"
            onClick={() => scrollToSection("service")}
          >
            Services
          </li>
          <li
            className="cursor-pointer hover:text-green-300"
            onClick={() => scrollToSection("about")}
          >
            Why Us?
          </li>
          <li
            className="cursor-pointer hover:text-green-300"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
}
