import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/admin_logo_white.png";
import { ReactComponent as Dashboard_Icon } from "../assets/icons/sidenavbar/dashboard.svg";
import { ReactComponent as User_Management_Icon } from "../assets/icons/sidenavbar/user_management.svg";
import { ReactComponent as Device_Management_Icon } from "../assets/icons/sidenavbar/device_management.svg";
import { ReactComponent as Inventory_Management_Icon } from "../assets/icons/sidenavbar/inventory_management.svg";
import { ReactComponent as Customer_Management_Icon } from "../assets/icons/sidenavbar/customer_management.svg";
import { ReactComponent as Role_Based_Access_Icon } from "../assets/icons/sidenavbar/role_based_access.svg";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const activeTab = (tab) => {
    return (
      activeLink === tab && "bg-white border-r-4 border-black text-[#108699]"
    );
  };

  return (
    <div className="w-80 bg-[#108699] h-screen pt-5 text-white">
      <div className="center gap-7 pt-5">
        <img src={logo} alt="logo" />
        <h2 className="text-2xl font-regular">ADMIN PORTAL</h2>
      </div>

      <nav className=" font-regular text-navLinks  pt-16">
        <ul className=" flex flex-col ">
          <Link
            to="/dashboard"
            className={` ${activeTab("dashboard")}`}
            onClick={() => handleLinkClick("dashboard")}
          >
            <li className=" flex gap-3  p-5 pl-10 hover:bg-white hover:text-black cursor-pointer">
              <Dashboard_Icon />
              Dashboard
            </li>
          </Link>

          <Link
            to="user-management"
            className={` ${activeTab("User_Management")}`}
            onClick={() => handleLinkClick("User_Management")}
          >
            <li className=" flex gap-3  p-5 pl-10 hover:bg-white hover:text-black cursor-pointer">
              <User_Management_Icon />
              User Management
            </li>
          </Link>

          <Link
            to="device-management"
            className={` ${activeTab("Device_Management")}`}
            onClick={() => handleLinkClick("Device_Management")}
          >
            <li className=" flex gap-3  p-5 pl-10 hover:bg-white hover:text-black cursor-pointer">
              <Device_Management_Icon />
              Device Management
            </li>
          </Link>

          <Link
            to="inventory-management"
            className={` ${activeTab("Inventory_Management")}`}
            onClick={() => handleLinkClick("Inventory_Management")}
          >
            <li className=" flex gap-3  p-5 pl-10 hover:bg-white hover:text-black cursor-pointer">
              <Inventory_Management_Icon />
              Inventory Management
            </li>
          </Link>

          <NavLink
            to="customer-management"
            className={` ${activeTab("Customer_Management")}`}
            onClick={() => handleLinkClick("Customer_Management")}
          >
            <li className=" flex gap-3  p-5 pl-10 hover:bg-white hover:text-black cursor-pointer">
              <Customer_Management_Icon />
              Customer Management
            </li>
          </NavLink>

          <Link
            to="role-based-access"
            className={` ${activeTab("Role_Based_Access")}`}
            onClick={() => handleLinkClick("Role_Based_Access")}
          >
            <li className=" flex gap-3  p-5 pl-10 hover:bg-white hover:text-black cursor-pointer">
              <Role_Based_Access_Icon />
              Role Based Access
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
