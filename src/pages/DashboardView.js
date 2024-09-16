import React from "react";
import StatCard from "./StatCard";
import UserManagementCard from "./UserManagementCard";
import DeviceManagementCard from "./DeviceManagementCard";
import CustomerManagementCard from "./CustomerManagementCard";
const DashboardView = () => {
  return (
    <div className="h-full bg-gray-100 p-8">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-[#10100F]">My Dashboard</h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        <div className="flex gap-5">
          <UserManagementCard />
          <DeviceManagementCard />
          <CustomerManagementCard />
        </div>
        {/* <StatCard
          title="User Management"
          total="42"
          activeLabel="Active Cameras"
          inactiveLabel="Inactive Cameras"
        />
        <StatCard
          title="Device Management"
          total="42"
          activeLabel="Active Devices"
          inactiveLabel="Inactive Devices"
        />
        <StatCard
          title="Customer Management"
          total="42"
          activeLabel="Active Customers"
          inactiveLabel="Inactive Customers"
          additionalInfo={["Parent", "Caretaker", "Co-Parent"]}
        /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default DashboardView;
