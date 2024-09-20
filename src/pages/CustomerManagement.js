import React, { useEffect, useRef, useState } from "react";
import customerManagementData from "../temp/customer_management_data.json";
import { ReactComponent as FilterIcon } from "../assets/icons/userManagement/filterIcon.svg";
import { ReactComponent as X_mark } from "../assets/icons/userManagement/xMark.svg";
import { div } from "framer-motion/client";

const CustomerManagement = () => {
  const itemPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterPopUp, setIsFilterPopUp] = useState(false);
  const [actionDropDown, setActionDropDown] = useState(null);
  const filterRef = useRef(null);
  const actionPopUpRef = useRef(null);
  const [expandedUserDetails, setExpandedUserDetails] = useState(null);

  const totalPages = Math.ceil(customerManagementData?.length / itemPerPage);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItems = customerManagementData?.slice(startIndex, endIndex);

  const toggleActionDropDown = (index) => {
    if (actionDropDown === index) {
      setActionDropDown(null);
    } else {
      setActionDropDown(index);
    }
  };

  const toggleUserDetails = (index) => {
    setExpandedUserDetails((prev) => (prev === index ? null : index));
    console.log("index : " , index )
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // function to generate dynamic page buttons
  const renderPageButtons = () => {
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    const buttons = [];

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`size-8 lg:size-10 rounded-full border border-gray-200 mx-1 transition-all duration-200 ${
            currentPage === i ? "bg-[#108699] text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      buttons.unshift(<span key="start-ellipsis">...</span>);
      buttons.unshift(
        <button
          key={1}
          className={`size-8 lg:size-10 rounded-full border border-gray-200 mx-1 transition-all duration-200 ${
            currentPage === 1 ? "bg-[#108699] text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(1)}>
          1
        </button>
      );
    }

    if (endPage < totalPages) {
      buttons.push(<span key="end-ellipsis">...</span>);
      buttons.push(
        <button
          key={totalPages}
          className={`size-8 lg:size-10 rounded-full border border-gray-200 mx-1 transition-all duration-200 ${
            currentPage === totalPages
              ? "bg-[#108699] text-white"
              : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  // hide filter when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        e.target !== filterRef.current &&
        !filterRef.current.contains(e.target)
      ) {
        setIsFilterPopUp(false);
      }
    };
    if (isFilterPopUp) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isFilterPopUp]);

  // hide action when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionPopUpRef.current &&
        !actionPopUpRef.current.contains(event.target)
      ) {
        setActionDropDown(null); // Close the dropdown when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [actionPopUpRef]);

  return (
    <div className="flex flex-col gap-5 px-4 relative">
      <div className="flex justify-between items-center flex-wrap space-y-4 2xl:pr-8">
        <div className="font-medium text-2xl">Device Management</div>
        <div className="flex items-center justify-start md:justify-center gap-5 flex-wrap">
          <div className="search relative">
            <input
              type="search"
              className="border-2 border-gray-300 rounded outline-none md:w-44 lg:w-72 xl:w-80 2xl:w-96 p-2 pr-6"
              placeholder="Model Number, WiFi Name, or User Email"
            />
            <i className="fa-solid fa-magnifying-glass absolute top-[20%] text-lg right-[5%] text-gray-300"></i>
          </div>
          <div ref={filterRef} className="">
            <div
              onClick={() => setIsFilterPopUp(!isFilterPopUp)}
              className="border border-gray-700 center gap-2 px-4 py-2 rounded cursor-pointer">
              Filter <FilterIcon />
            </div>
            {isFilterPopUp && (
              <div className="fixed right-0 top-0 bottom-0 z-30 w-80  p-5 py-8 pb-44 lg:pb-72 rounded bg-white shadow-lg">
                <div className="flex flex-col gap-6 relative">
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-xl lg:text-2xl">Filters</div>
                    <div
                      onClick={() => setIsFilterPopUp(!isFilterPopUp)}
                      className="cursor-pointer">
                      <X_mark />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">User Type</div>
                    <div className="flex flex-col gap-2 text-[#4B4F50]">
                      <div className="flex gap-3">
                        <input id="all" type="checkbox" className="" />
                        <label htmlFor="all">All</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="parent" type="checkbox" className="" />
                        <label htmlFor="parent">Parent</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="caretaker" type="checkbox" className="" />
                        <label htmlFor="caretaker">Caretaker</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="co-parent" type="checkbox" className="" />
                        <label htmlFor="co-parent">Co-Parent</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">Device Type</div>
                    <div className="flex flex-col gap-2 text-[#4B4F50]">
                      <div className="flex gap-3">
                        <input id="all-status" type="checkbox" className="" />
                        <label htmlFor="all-status">All</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="camera" type="checkbox" className="" />
                        <label htmlFor="camera">Camera</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="speaker" type="checkbox" className="" />
                        <label htmlFor="speaker">speaker</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">Device Status</div>
                    <div className="flex flex-col gap-2 text-[#4B4F50]">
                      <div className="flex gap-3">
                        <input id="all-status" type="checkbox" className="" />
                        <label htmlFor="all-status">All</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="connected" type="checkbox" className="" />
                        <label htmlFor="connected">Connected</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="disconnected" type="checkbox" className="" />
                        <label htmlFor="disconnected">Disconnected</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="suspended" type="checkbox" className="" />
                        <label htmlFor="suspended">Suspended</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium">User Status</div>
                    <div className="flex flex-col gap-2 text-[#4B4F50]">
                      <div className="flex gap-3">
                        <input id="all" type="checkbox" className="" />
                        <label htmlFor="all">All</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="active" type="checkbox" className="" />
                        <label htmlFor="active">Active</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="inactive" type="checkbox" className="" />
                        <label htmlFor="inactive">Inactive</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-7 right-0 flex justify-evenly w-full px-2 h-10">
                  <button className="w-32 py-1 rounded border border-[#182D40]">
                    Reset
                  </button>
                  <button className="w-32 py-1 rounded border border-[#182D40] bg-[#182D40] text-white">
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-[60vw] lg:w-[70vw] xl:w-[75vw] 2xl:w-[80vw] h-[65vh] lg:h-[70vh] overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 border-t rounded overflow-hidden">
          <thead className="">
            <tr className="bg-[#1E4154] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left min-w-12">
                Action
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left min-w-12">
                <i className="fa-solid fa-angle-down"></i>
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left min-w-36">
                Profile Picture
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left min-w-32">
                User Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left min-w-52">
                User Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left  min-w-44">
                Contact Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left min-w-32">
                User Type
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left min-w-32">
                User Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item, index) => (
              <>
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    <div
                      className="relative"
                      ref={index === actionDropDown ? actionPopUpRef : null}>
                      <div
                        onClick={() => toggleActionDropDown(index)}
                        className="center cursor-pointer py-3">
                        <i className="fa-solid fa-ellipsis-vertical text-gray-400 "></i>
                      </div>

                      {actionDropDown === index && (
                        <div className="absolute bg-white py-3 w-36 -top-[70px] left-12 flex flex-col gap-2 font-medium shadow-lg">
                          <div className="hover:scale-[1.01] hover:bg-gray-100 px-5 py-1 w-full rounded cursor-pointer">
                            View details
                          </div>
                          <div className="hover:scale-[1.01] hover:bg-gray-100 px-5 py-1 rounded cursor-pointer">
                            {item.userStatus === "active"
                              ? "Inactive"
                              : "Active"}
                          </div>
                          <div className="hover:scale-[1.01] hover:bg-gray-100 px-5 py-1 w-full rounded cursor-pointer">
                            Delete user
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                  <td
                    onClick={() => toggleUserDetails(index)}
                    className="border border-gray-300 px-4 py-2 text-left min-w-12">
                    <i
                      className={`fa-solid ${
                        expandedUserDetails === index
                          ? "fa-angle-up"
                          : "fa-angle-down"
                      }`}></i>
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    <div className="center">
                      <img
                        // src={employee.profilePicture}
                        src="https://imgs.search.brave.com/zPzt7V_Ltk579_qRd18_S9j1bQxeusrHOne1xgWFKWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MTA4NDE2OC9waG90/by9vdmVyam95ZWQt/cHJldHR5LWFzaWFu/LXdvbWFuLWxvb2st/YXQtY2FtZXJhLXdp/dGgtc2luY2VyZS1s/YXVnaHRlci53ZWJw/P2E9MSZiPTEmcz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Q184d0cz/YjdlX0NPWWhmV190/akZZLU9kbUhIRU1E/UlNHTUYwWTRGMGZ6/Zz0"
                        alt={`${item.username}`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.username}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.userMail}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.contactNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.userType?.slice(0, 1).toUpperCase() +
                      item?.userType?.slice(1)?.toLocaleLowerCase()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div
                      className={` w-24 p-1 center rounded-3xl ${
                        item?.userStatus === "active" && "bg-green-100 "
                      } ${item?.userStatus === "inactive" && "bg-red-100 "}`}>
                      {item?.userStatus?.slice(0, 1).toUpperCase() +
                        item?.userStatus?.slice(1)?.toLocaleLowerCase()}
                    </div>
                  </td>
                </tr>

                {expandedUserDetails === index && (
                  <tr className={`${itemPerPage-index <=2 ? "relative" :"" }`}>
                    <td colSpan={8} className={`p-2 ${itemPerPage-index <=2 ? "absolute bottom-0 w-full" :"" }`}>
                      <table className="min-w-full border-collapse border border-gray-300 rounded-xl overflow-hidden">
                        <thead className="bg-[#C8CFD2] text-[#1E4154] border-2">
                          <tr>
                            <th className=" px-4 py-3">Device Name</th>
                            <th className=" px-4 py-3">Device Type</th>
                            <th className=" px-4 py-3">Device Status</th>
                            <th className=" px-4 py-3">Latest Status Update</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.deviceInfo.map((device, deviceIndex) => (
                            <tr key={deviceIndex}>
                              <td className="border border-[#DEDEDE] bg-[#F8F8F8] px-4 py-2">
                                {device?.deviceName}
                              </td>
                              <td className="border border-[#DEDEDE] bg-[#F8F8F8] text-center px-4 py-2">
                                {device?.deviceType}
                              </td>
                              <td
                                className={`border center border-[#DEDEDE] bg-[#F8F8F8] px-4 py-2`}>
                                <div
                                  className={`w-28 p-1 center rounded-3xl ${
                                    device.deviceStatus === "connected" &&
                                    "bg-green-100"
                                  } ${
                                    device.deviceStatus === "disconnected" &&
                                    "bg-red-100"
                                  } ${
                                    device.deviceStatus === "suspended" &&
                                    "bg-orange-100"
                                  }`}>
                                  {" "}
                                  {device?.deviceStatus
                                    .slice(0, 1)
                                    ?.toUpperCase() +
                                    device?.deviceStatus
                                      .slice(1)
                                      ?.toLowerCase()}
                                </div>
                              </td>
                              <td className="border  border-[#DEDEDE] bg-[#F8F8F8] px-4 py-2 text-center">
                                {device?.latestDeviceStatus}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between px-12 items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`size-8 lg:size-10 center transition-all duration-200 rounded-full border border-gray-200 ${
              currentPage === 1 ? "opacity-50" : "hover:bg-gray-200"
            }`}>
            <i className="fa-solid fa-chevron-left text-xs"></i>
          </button>
          {renderPageButtons()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`size-8 lg:size-10 center transition-all duration-200 rounded-full border border-gray-200 ${
              currentPage === totalPages ? "opacity-50" : "hover:bg-gray-200"
            }`}>
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>
        <div className="text-sm">
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, customerManagementData?.length)} of{" "}
          {customerManagementData?.length} entries
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
