// src/components/Header.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/darkModeSlice';
const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center dark:bg-gray-800">
      <h1 className="text-xl font-bold"></h1>
      <div className="flex items-center space-x-3">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
        D
      </div>

      {/* Name and Role */}
      <div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">Desirae Rhiel Madsen</p>
        <p className="text-sm text-gray-500">Admin</p>
      </div>

      {/* Dropdown Icon */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    </header>
  );
};

export default Header;
