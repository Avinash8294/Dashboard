import React, { useState } from 'react';

const RoleBasedAccess = () => {
  const [activeTab, setActiveTab] = useState('Customer Admin');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const features = [
    'Dashboard',
    'User Management',
    'My Profile',
    'Device Management',
    'Inventory Management',
    'Customer Management',
    'Reports',
  ];

  const permissions = ['Add', 'View', 'Edit', 'Active/Inactive', 'Delete', 'Download'];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Role based access</h1>
      
      <div className="bg-gray-100 p-4 mb-4 rounded-md">
        <h2 className="font-semibold mb-2">Role Descriptions</h2>
        <p><strong>Super Admin:</strong> Has the ability to enable or disable access to each feature by selecting or unselecting the check mark.</p>
        <p><strong>Customer Admin:</strong> Access is controlled by the Super Admin, Customer Admin cannot change their own access.</p>
        <p><strong>Billing Admin:</strong> Access is controlled by the Super Admin, Billing Admin cannot change their own access.</p>
      </div>
      
      <div className="border-b border-gray-300 mb-4">
        <button
          className={`py-2 px-4 ${activeTab === 'Customer Admin' ? 'border-b-2 border-black' : ''}`}
          onClick={() => handleTabClick('Customer Admin')}
        >
          Customer Admin
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'Billing Admin' ? 'border-b-2 border-black' : ''}`}
          onClick={() => handleTabClick('Billing Admin')}
        >
          Billing Admin
        </button>
      </div>
      
      <table className="min-w-full bg-white border border-gray-300 rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Features</th>
            {permissions.map((permission) => (
              <th key={permission} className="py-2 px-4 border-b">{permission}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature}>
              <td className="py-2 px-4 border-b">{feature}</td>
              {permissions.map((permission) => (
                <td key={`${feature}-${permission}`} className="py-2 px-4 border-b text-center">
                  <input type="checkbox" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleBasedAccess;
