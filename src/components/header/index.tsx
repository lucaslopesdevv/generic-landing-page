'use client'
import React, { useState } from 'react';

interface HeaderProps {
  title?: string;
  onMenuToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = 'Curso Pro', 
  onMenuToggle, 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.();
  };

  return (
    <header className={`bg-white shadow-md border-b border-primary-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">          
            <h1 className="text-3xl font-extrabold text-primary ml-4 md:ml-0">{title}</h1>
          </div>
          
          <nav className={`absolute top-16 left-0 w-full text-text-primary bg-white shadow-lg md:relative md:top-0 md:shadow-none md:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              <li className="py-2 md:py-0"><a href="/" className="text-text-primary hover:text-primary-600 px-3 py-2 rounded-md text-lg font-medium">Home</a></li>
              <li className="py-2 md:py-0"><a href="#about" className="text-text-primary hover:text-primary-600 px-3 py-2 rounded-md text-lg font-medium">About</a></li>
              <li className="py-2 md:py-0"><a href="#services" className="text-text-primary hover:text-primary-600 px-3 py-2 rounded-md text-lg font-medium">Services</a></li>
              <li className="py-2 md:py-0"><a href="#contact" className="text-text-primary hover:text-primary-600 px-3 py-2 rounded-md text-lg font-medium">Contact</a></li>
            </ul>
          </nav>

          <button 
              className="p-2 rounded-md text-primary-400 text-text-primary hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-6 relative ${isMenuOpen ? 'open' : ''}`}>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-1'}`}></span>
              </span>
            </button>
        </div>
      </div>
    </header>
  );
};

