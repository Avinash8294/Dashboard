import { div, image } from "framer-motion/client";
import React, { useRef, useState } from "react";
import { useSSR } from "react-i18next";
import Notification from "../components/notificationPopup";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const fileInputRef = useRef(null);
  const user = {
    creationDate: "09/19/2024",
    profilePicture: "", // Leave blank if no image, otherwise provide a URL
    firstName: "John",
    lastName: "Doe",
    middleName: "M.",
    email: "john.doe@example.com",
    role: "Admin", // Options: Admin, Supervisor, Helper
    contactNumber: "+1234567890", // Include country code
    department: "Engineering", // Non-editable
    designation: "Software Engineer", // Non-editable
    employeeId: "EMP12345", // Non-editable
    status: "Active", // Non-editable, options: Active
  };

  const [userData, setuserData] = useState(user);
  const [base64Image, setBase64Image] = useState(null);
  const [isVisible, setisVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setuserData((prevState) => ({
      ...prevState, // Spread the previous state to keep other fields intact
      [name]: value, // Dynamically update the field that matches the input's name
    }));
  };

  // Function to handle image selection
  const handleImageChange = (e) => {
    alert("");
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      // When file reading is done, update state with Base64 image
      reader.onloadend = () => {
        setBase64Image(reader.result);
        console.log(reader.result);
        setuserData((prevData) => ({
          ...prevData,
          profilePicture: reader.result,
        }));
      };

      // Read file as data URL (Base64)
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const validateContact = (contact) => {
    // Remove any non-numeric characters except for the leading +
    const cleanedContact = contact.replace(/[^\d+]/g, "");

    // Regular expression to validate an optional + sign followed by 10 to 15 digits
    if (/^\+?\d{10,15}$/.test(cleanedContact)) {
      // If the number starts with +91 and has 10 digits following, it's a valid Indian number
      if (cleanedContact.startsWith("+91") && cleanedContact.length === 13) {
        return true;
      }
      // Or if it's a regular 10-digit number without a country code
      if (!cleanedContact.startsWith("+") && cleanedContact.length === 10) {
        return true;
      }
    }

    return false; // Contact is invalid
  };

  

  return (
    <div className="w-full">
      <div className="bg-white shadow-md p-5">
        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
        <div className="p-9">
          <div className="flex items-start mb-6 border-b-2 border-gray-300 pb-4">
            {/* Custom Avatar */}
            <div className="w-24 h-24 my-auto flex items-center justify-center relative ">
              {base64Image ? (
                <>
                  <div>
                    <img
                      src={base64Image}
                      alt="Profile"
                      className="w-24 h-24 rounded-full border overflow-hidden"
                    />
                  </div>
                </>
              ) : (
                <span className=" size-full flex items-center justify-center bg-purple-500 rounded-full text-white text-4xl font-semibold">
                  D
                </span>
              )}

              <span
                onClick={handleIconClick}
                className="size-8 grid cursor-pointer text-center content-center shadow-lg absolute bottom-0 right-0 rounded-full bg-white text-lg text-gray-400"
              >
                <i class="fa-solid fa-camera"></i>
              </span>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            <div className="space-y-2 w-1/3 p-2">
              <div className="flex ">
                <span className=" flex-1">Email ID</span>
                <span className="font-medium flex-1">{user.email}</span>
              </div>
              <div className="flex">
                <span className=" flex-1">Creation Date</span>
                <span className="font-medium flex-1 text-black">
                  {user.creationDate}
                </span>
              </div>
              <div className="flex">
                <span className=" flex-1">Role</span>
                <span className="font-medium flex-1">{user.role}</span>
              </div>
              <div className="flex items-center">
                <span className=" flex-1">Status</span>
                <span className="font-medium flex-1">
                  <span className="px-7 py-1 bg-green-100 w-fit rounded-full text-sm">
                    {user.status}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Custom Form Inputs */}
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="employeeId"
                className="block text-sm font-medium text-gray-700"
              >
                Employee ID*
              </label>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                value={userData.employeeId}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number*
              </label>
              <input
                type="number"
                required
                id="contactNumber"
                name="contactNumber"
                maxLength={13}
                value={userData.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 border border-[#108699] rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={() => setisVisible(true)}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#108699] hover:bg-[#47a3b1f9]"
          >
            Save Changes
          </button>
        </div>
      </div>
      <Notification
        message={"Your Profile has been successfully updated."}
        isVisible={isVisible}
        setisVisible={setisVisible}
      />
    </div>
  );
};

export default PersonalInfo;
