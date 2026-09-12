
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="relative flex items-center justify-between px-4 sm:px-8 py-4 mx-auto max-w-6xl">
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)}className="p-1 text-gray-700 hover:text-pink-600 focus:outline-none"
              aria-label="Toggle Menu">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center">
            <img src={Logo} alt="Dev Stack Logo" className="object-contain w-auto h-8 sm:h-10"/>
          </div>
            <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
              <li className="transition-colors cursor-pointer hover:text-pink-600">
               Home
              </li>
              <li className="transition-colors cursor-pointer hover:text-pink-600">
                Technologies
              </li>
              <li className="transition-colors cursor-pointer hover:text-pink-600">
                Projects
              </li>
              <li className="transition-colors cursor-pointer hover:text-pink-600">
               About
              </li>
              <li className="transition-colors cursor-pointer hover:text-pink-600">
               Contact
              </li>
            </ul>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <button className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-base 
                font-medium text-gray-700 transition-colors hover:text-pink-600">
                Sign In
              </button>
              <button className="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-base font-medium text-white
               transition-colors bg-pink-600 rounded-lg hover:bg-pink-700">
               Sign Up
              </button>
            </div>
          </div>
           {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-8 py-4 flex
           flex-col gap-4 font-medium text-gray-700 shadow-lg">
            <a href="#home" onClick={() => setIsOpen(false)} className="transition-colors hover:text-pink-600">
             Home
            </a>
            <a href="#technologies" onClick={() => setIsOpen(false)}
             className="transition-colors hover:text-pink-600">
             Technologies
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="transition-colors hover:text-pink-600">
             Projects
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="transition-colors hover:text-pink-600">
             About
            </a>
            <a href="#contact"onClick={() => setIsOpen(false)} className="transition-colors hover:text-pink-600">
              Contact
            </a>
          </div>
        )}
      </nav>
  );
}

