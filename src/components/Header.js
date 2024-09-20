// src/components/Header.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header className="bg-gray-50 border-b-2 shadow-md p-4 z-20 flex justify-between items-center dark:bg-gray-800">
      <h1 className="text-xl font-bold"></h1>
      <div className="flex items-center space-x-3 relative">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
          D
        </div>

        {/* Name and Role */}
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Desirae Rhiel Madsen
          </p>
          <p className="text-sm text-gray-500">Admin</p>
        </div>

        {/* Dropdown Icon */}
        <div
          onClick={() => setUserMenu(!userMenu)}
          tabIndex={0} // Make the div focusable
          onBlur={() => setUserMenu(false)} // Closes menu when it loses focus
          className=" p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` h-5 w-5 text-gray-400 transition-all transition-400 ${
              userMenu ? "rotate-180 " : "rotate-0"
            } `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {userMenu && (
            <div className="p-4 absolute right-0 top-12 bg-white shadow-md rounded-md text-lg w-[130%]">
              <div
                onClick={() => navigate("profile")}
                className="p-2 hover:bg-slate-100 cursor-pointer"
              >
                My Profile
              </div>
              <div className="p-2 hover:bg-slate-100 cursor-pointer">
                Change password
              </div>
              <div className="p-2 hover:bg-slate-100 cursor-pointer text-red-500">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
