import React, { useState } from "react";

const RoleBasedAccess = () => {
  const [activeTab, setActiveTab] = useState("Customer Admin");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const features = [
    "Dashboard",
    "User Management",
    "My Profile",
    "Device Management",
    "Inventory Management",
    "Customer Management",
    "Reports",
  ];

  const permissions = [
    "Add",
    "View",
    "Edit",
    "Active/Inactive",
    "Delete",
    "Download",
  ];

  return (
    <div className="p-6 bg-gray-50 ">
      <h1 className="text-2xl font-bold mb-4">Role based access</h1>

      <div className="bg-[#EDF0F1] p-4 mb-4 rounded-md flex flex-col gap-2">
        <h2 className="font-bold mb-2 text-lg text-[#4B6776]">
          Role Descriptions
        </h2>
        <p>
          <strong className="mr-2">Super Admin:</strong> Has the ability to
          enable or disable access to each feature by selecting or unselecting
          the check mark.
        </p>
        <p>
          <strong className="mr-2">Customer Admin:</strong> Access is controlled
          by the Super Admin, Customer Admin cannot change their own access.
        </p>
        <p>
          <strong className="mr-2">Billing Admin:</strong> Access is controlled
          by the Super Admin, Billing Admin cannot change their own access.
        </p>
      </div>

      <div className="border-b border-gray-300 rounded-lg overflow-hidden bg-white mb-4 font-medium">
        <button
          className={`py-2 px-4 ${
            activeTab === "Customer Admin"
              ? "border-b-2 border-black text-[#182D40]"
              : "text-[#4B4F50]"
          }`}
          onClick={() => handleTabClick("Customer Admin")}>
          Customer Admin
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "Billing Admin"
              ? "border-b-2 border-black text-[#182D40]"
              : "text-[#4B4F50]"
          }`}
          onClick={() => handleTabClick("Billing Admin")}>
          Billing Admin
        </button>
      </div>
<div className="rounded-md overflow-hidden">


      <table className="min-w-full bg-white border border-gray-300  ">
        <thead className="bg-[#1E4154] text-white">
          <tr>
            <th className="py-2 px-4 border-b">Features</th>
            {permissions.map((permission) => (
              <th key={permission} className="py-2 px-4 border-b md:min-w-24">
                {permission}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature}>
              <td className="py-2 px-4 border font-medium">{feature}</td>
              {permissions.map((permission) => (
                <td
                  key={`${feature}-${permission}`}
                  className="py-2 px-4 border text-center">
                  <input type="checkbox" className="square-checkbox" />{" "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RoleBasedAccess;
