import React, { useEffect, useRef, useState } from "react";
import noDp from "../assets/images/noDp.png";
import { ReactComponent as Camera_icon } from "../assets/icons/userManagement/cameraIcon.svg";
const AddNewUser = ({ isOpen, OnSubmit }) => {
  const [isEmptyFieldWarning, setIsEmptyFieldWarning] = useState(false);
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    profilePicture: null,
    employeeId: "",
    firstName: "",
    lastName: "",
    middleName: "",
    role: "Admin",
    contactNumber: "",
    creationDate: "",
    department: "",
    designation: "",
    status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsEmptyFieldWarning(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = Object.keys(formData).filter(
      (key) =>
        !formData[key] &&
        [
          "firstName",
          "lastName",
          "email",
          "employeeId",
          "role",
          "contactNumber",
          "department",
          "designation",
        ].includes(key)
    );

    if (emptyFields.length > 0) {
      setIsEmptyFieldWarning(true);
      console.log("field is empty");
      setIsSubmissionSuccess(false);
      return;
    } else {
      setIsEmptyFieldWarning(false);
      console.log("Form Data : ", formData);
      setIsSubmissionSuccess(true);
      setTimeout(() => {
        isOpen();
      }, 2000);
    }
  };

  return (
    <div className="bg-gray-50 py-5 lg:px-16 px-4  rounded  flex flex-col gap-5 relative">
      <div className="font-bold text-lg lg:text-2xl">Create a user</div>
      <div className="border border-[#DCE4E7] rounded-full size-20 lg:size-28 center relative cursor-pointer">
        <img src={noDp} alt="user profile picture" />
        <div className="size-5 lg:size-8 rounded-full absolute bottom-0 right-0 bg-white center">
          <Camera_icon />
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 lg:gap-3 lg:pb-28 pb-20  relative">
          <div className="flex justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter the First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-auto "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="middleName">Middle Name</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Enter the Middle Name"
                value={formData.middleName}
                onChange={handleChange}
                className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-auto "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter the Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-auto"
              />
            </div>
          </div>
          <div className="flex justify-between gap-4 lg:gap-12">
            <div className="flex flex-col gap-2 lg:gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="email">
                  E-mail <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter the User E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="department">
                  Department <span className="text-red-600">*</span>
                </label>
                {/* <select
                  name="department"
                  id="department"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72">
                  <option value="">This</option>
                  <option value="">That</option>
                </select> */}
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="Enter the Department"
                  value={formData.department}
                  onChange={handleChange}
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="designation">
                  Designation <span className="text-red-600">*</span>
                </label>
                {/* <select
                  name="designation"
                  id="designation"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72">
                  <option value="">This</option>
                  <option value="">That</option>
                </select> */}
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  placeholder="Enter the Designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="role">Role</label>
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72">
                  <option value="admin">Admin</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="helper">Helper</option>
                  {/* <option value="">No No, that one</option> */}
                </select>
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
                  value={formData.contactNumber}
                  onChange={handleChange}
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
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72"
                />
              </div>
              {/* <div className="flex flex-col gap-1">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id="status"
                  className="outline-none border border-gray-300 p-2 rounded w-44 lg:w-72">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div> */}
            </div>
          </div>
          <div className="absolute bottom-4 right-0   flex gap-6">
            <button
              onClick={isOpen}
              className="border border-[#182D40] px-4 py-2  rounded cursor-pointer">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#108699] text-white  px-4 py-2  rounded cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* empty field warning---  --- --- */}
      &&
      <div
        className={`absolute top-1 right-1 text-white  px-2 md:px-5 py-5  flex items-center justify-between gap-5  ${
          isEmptyFieldWarning &&
          " rounded-l-3xl border-l-4 border-l-[#7C0404] bg-[#BB2124]"
        } ${
          isSubmissionSuccess &&
          " rounded-l-3xl border-l-4 border-l-[#00856E] bg-[#0AC2A2]"
        }`}>
        <div className="size-7 center rounded-full bg-white">
          {isEmptyFieldWarning && (
            <i className="fa-solid fa-exclamation text-[#BB2124]"></i>
          )}
          {isSubmissionSuccess && (
            <i className="fa-solid fa-check text-[#0AC2A2]"></i>
          )}
        </div>
        <div className="w-44 lg:w-72 2xl:w-80">
          <div className="font-semibold">
            {isEmptyFieldWarning && "Missing Fields"}{" "}
            {isSubmissionSuccess && "User successfully added"}
          </div>
          <div className="hidden lg:block">
            {isEmptyFieldWarning &&
              " One of the required field is empty or contains invalid data"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
