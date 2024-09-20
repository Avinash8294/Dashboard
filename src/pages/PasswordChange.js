import { useState } from "react";
import Notification from "../components/notificationPopup";
import { isVisible } from "@testing-library/user-event/dist/utils";

export default function PasswordChange() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isVisible, setisVisible] = useState(false);

  const validatePassword = (password) => {
    const criteria = [
      { regex: /.{8,}/, description: "A minimum length (8 characters)." },
      { regex: /[A-Z]/, description: "At least one uppercase letter." },
      { regex: /[a-z]/, description: "At least one lowercase letter." },
      { regex: /\d/, description: "At least one number." },
      {
        regex: /[!@#$%^&*(),.?":{}|<>]/,
        description: "At least one special character.",
      },
    ];

    return criteria.map((criterion) => ({
      met: criterion.regex.test(password),
      description: criterion.description,
    }));
  };

  const passwordCriteria = validatePassword(newPassword);

  const clearState = () => {
    setConfirmPassword("");
    setNewPassword("");
    setCurrentPassword("");
  };

  // const passwordCriteria = [
  //   { label: "A minimum length (8 characters).", met: newPassword.length >= 8 },
  //   { label: "At least one uppercase letter.", met: /[A-Z]/.test(newPassword) },
  //   { label: "At least one lowercase letter.", met: /[a-z]/.test(newPassword) },
  //   { label: "At least one number.", met: /\d/.test(newPassword) },
  //   {
  //     label: "At least one special character.",
  //     met: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
  //   },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the password change request to your backend
    console.log("Password change submitted");
  };

  return (
    <div className="w-full mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Change password</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="flex">
            <div className="w-1/2">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Password*
                </label>
                <div className="relative">
                  <input
                    type={showCurrent ? "text" : "password"}
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter current Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  >
                    {showCurrent ? (
                      <i className="fa-regular fa-eye"></i>
                    ) : (
                      <i className="fa-regular fa-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  New Password*
                </label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter New Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                  >
                    {showNew ? (
                      <i className="fa-regular fa-eye"></i>
                    ) : (
                      <i className="fa-regular fa-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm New Password*
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="re-enter the new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 "
                  >
                    {showConfirm ? (
                      <i className="fa-regular fa-eye"></i>
                    ) : (
                      <i className="fa-regular fa-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-1/2 py-5">
              <div className="bg-gray-100 w-2/3 p-4 float-end rounded-md">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Password criteria
                </h3>
                <ul className="space-y-1">
                  {/* {passwordCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={criterion.met}
                        readOnly
                        className="h-4 w-4 appearance-none bg-gray-100 border-2 border-gray-400 rounded"
                      />

                      <span className="text-sm text-gray-600">
                        {criterion.label}
                      </span>
                    </li>
                  ))} */}

                  {passwordCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-center  space-x-2">
                      <div className="">
                        {newPassword === "" ? (
                          <div className="size-4 border-2 border-gray-400 rounded-sm"></div>
                        ) : (
                          <div className="">
                            {criterion.met ? (
                              <svg
                                className="h-4 w-4 text-white bg-green-400 "
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M5 13l4 4L19 7"></path>
                              </svg>
                            ) : (
                              <svg
                                className="h-4 w-4 text-red-500"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            )}
                          </div>
                        )}
                      </div>

                      <span>{criterion.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={clearState}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 "
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={() => setisVisible(true)}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#108699] hover:bg-[#406a70] "
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <Notification
        message={"Your Profile has been successfully updated."}
        isVisible={isVisible}
        setisVisible={setisVisible}
      />
    </div>
  );
}
