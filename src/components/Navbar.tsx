'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-600">Uprising</span>
          <span className="text-[#556B2F]">Techno</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 