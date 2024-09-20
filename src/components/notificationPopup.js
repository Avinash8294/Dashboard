import React, { useState, useEffect } from "react";
import { useSSR } from "react-i18next";

const Notification = ({ message, isVisible, setisVisible }) => {
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setisVisible(false); // Call the onClose function after 3 seconds
      }, 3000);
    }
  }, [isVisible, setisVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 z-20 right-4 h-screen w-screen bg-black/10">
      <div className="text-2xl float-end min-w-[30%] bg-[#0AC2A2] text-white px-10 py-14 shadow-lg rounded-s-3xl flex items-center animate-fade-in-out">
        <span className="text-white mr-2 ">
          <i class="fa-solid fa-circle-check"></i>
        </span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Notification;
