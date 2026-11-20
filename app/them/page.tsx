'use client';

import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (

  <div className="fixed top-6 right-6 z-50">
  <button
    type="button" 
    onClick={toggleTheme} 
   
    className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 bg-white
     dark:bg-[#1e1e1e] text-gray-800 dark:text-yellow-400
      hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition flex items-center gap-2 shadow-md cursor-pointer"
  >
    
    {isDark ? ' Light' : ' Dark'}
  </button>
</div> 
   );
}