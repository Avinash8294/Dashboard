import React, { useState } from "react";
import noDp from "../assets/images/noDp.png";
import { ReactComponent as Camera_icon } from "../assets/icons/userManagement/cameraIcon.svg";
const AddNewUser = ({ isOpen, OnSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    profilePicture: null,
    employeeId: "",
    firstName: "",
    lastName: "",
    role: "",
    contactNumber: "",
    creationDate: "",
    department: "",
    designation: "",
    status: "",
  });
  return (
    <div className="bg-gray-50 py-5 lg:px-16 px-4 lg:pb-28 pb-20 rounded  flex flex-col gap-5 relative">
      <div className="font-bold text-lg lg:text-2xl">Create a user</div>
      <div className="border border-[#DCE4E7] rounded-full size-20 lg:size-28 center relative cursor-pointer">
        <img src={noDp} alt="user profile picture"  />
        <div className="size-5 lg:size-8 rounded-full absolute bottom-0 right-0 bg-white center">
          <Camera_icon />
        </div>
      </div>
      <div>
        <form action="">
          <div className="flex justify-between gap-4 lg:gap-12 ">
            <div className="flex flex-col gap-2 lg:gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter the First Name"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter the Last Name"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">
                  E-mail <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter the User E-mail"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="employeeId">
                  Employee Id <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  placeholder="Enter the Supersede No."
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="role">
                  Role <span className="text-red-600">*</span>
                </label>
                <select
                  name="role"
                  id="role"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72">
                  <option value="">This Role</option>
                  <option value="">That Role</option>
                  {/* <option value="">No No, that one</option> */}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="middleName">Middle Name</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  placeholder="Enter the Middle Name"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contactNumber">
                  Contact Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter the Contact No."
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="designation">
                  Designation <span className="text-red-600">*</span>
                </label>
                <select
                  name="designation"
                  id="designation"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72">
                  <option value="">This</option>
                  <option value="">That</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="department">
                  Department <span className="text-red-600">*</span>
                </label>
                <select
                  name="department"
                  id="department"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72">
                  <option value="">This</option>
                  <option value="">That</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="status">Status</label>

                <select
                  name="status"
                  id="status"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="absolute bottom-4 right-4 lg:right-16 flex gap-6">
    <button onClick={isOpen} className="border border-[#182D40] px-4 py-2  rounded cursor-pointer">Cancel</button>
    <button className="bg-[#108699] text-white  px-4 py-2  rounded cursor-pointer">Submit</button>
      </div>
    </div>
  );
};

export default AddNewUser;
