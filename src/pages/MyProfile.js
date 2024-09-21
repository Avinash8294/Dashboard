import { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PasswordChange from "./PasswordChange";
import Notification from "../components/notificationPopup";
import { useLocation, useParams } from "react-router-dom";

export default function MyProfile() {
  const { tab } = useParams(); // Extract the 'tab' parameter from the URL
  console.log(tab, "548888");
  // alert(tab);

  const location = useLocation();
  const [activeTab, setActiveTab] = useState(tab);

  useEffect(() => {
    setActiveTab(tab);
  }, [location, tab]);

  return (
    <div className="w-full min-h-full overflow-auto mx-auto p-6 pr-8 space-y-6 bg-gray-100">
      {/* Custom Tab Navigation */}
      <div className="flex rounded-md overflow-hidden  border-gray-200 bg-white">
        <button
          className={`py-3 px-5 border-b-[3px] ${
            activeTab === "profile"
              ? "border-black"
              : "text-gray-500 border-transparent hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          My Profile
        </button>
        <button
          className={`py-3 px-5 border-b-[3px] ${
            activeTab === "password"
              ? "border-black"
              : "text-gray-500 border-transparent hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("password")}
        >
          Change Password
        </button>
      </div>

      {/* Profile Content */}
      {activeTab === "profile" && <PersonalInfo />}

      {/* Password Change Content */}
      {activeTab === "password" && <PasswordChange />}
    </div>
  );
}
