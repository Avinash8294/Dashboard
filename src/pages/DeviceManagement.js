import React, { useEffect, useRef, useState } from "react";
import deviceManagementData from "../temp/device_management_data.json";
import { ReactComponent as FilterIcon } from "../assets/icons/userManagement/filterIcon.svg";
import { ReactComponent as X_mark } from "../assets/icons/userManagement/xMark.svg";

const DeviceManagement = () => {
  const itemPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterPopUp, setIsFilterPopUp] = useState(false);
  const [actionDropDown, setActionDropDown] = useState(null);
  const filterRef = useRef(null);
  const actionPopUpRef = useRef(null);

  const totalPages = Math.ceil(deviceManagementData?.length / itemPerPage);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItems = deviceManagementData?.slice(startIndex, endIndex);

  const toggleActionDropDown = (index) => {
    if (actionDropDown === index) {
      setActionDropDown(null);
    } else {
      setActionDropDown(index);
    }
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
              <div className="fixed right-0 top-0 bottom-0 z-20 w-80  p-5 py-8 pb-44 lg:pb-72 rounded bg-white shadow-lg">
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
                    <div className="font-medium">Device Type</div>
                    <div className="flex flex-col gap-2 text-[#4B4F50]">
                      <div className="flex gap-3">
                        <input id="all" type="checkbox" className="" />
                        <label htmlFor="all">All</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="camera" type="checkbox" className="" />
                        <label htmlFor="camera">Camera</label>
                      </div>
                      <div className="flex gap-3">
                        <input id="speaker" type="checkbox" className="" />
                        <label htmlFor="speaker">Speaker</label>
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
              <th className="border border-gray-300 px-4 py-2 text-center min-w-12">
                Action
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center min-w-52">
                Model Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center min-w-32">
                FW Version
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center min-w-32">
                User Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center min-w-32">
                Device Type
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center min-w-32">
                Name of WiFi
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center min-w-32">
                WiFi Password
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center min-w-32">
                Device Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item, index) => (
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
                      <div className="absolute bg-white py-3 w-36 -top-10 left-12 flex flex-col gap-2 font-medium shadow-lg">
                        <div className="hover:scale-[1.01] hover:bg-gray-100 px-5 py-1 w-full rounded cursor-pointer">
                          Edit details
                        </div>
                        <div className="hover:scale-[1.01] hover:bg-gray-100 px-5 py-1 rounded cursor-pointer">
                          Inactive
                        </div>
                      </div>
                    )}
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item?.modelNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item?.fwVersion}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item?.userEmail}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item?.deviceType?.slice(0, 1)?.toUpperCase() +
                    item?.deviceType?.slice(1)}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item?.nameOfWifi}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item?.wifiPassword}
                </td>
                <td className={`border border-gray-300 px-4 py-2 $`}>
                  <div className="center">

                  <div
                    className={`  w-24 p-1 center rounded-3xl  ${
                      item?.deviceStatus === "Active" &&
                      "bg-green-100"
                    } ${
                      item?.deviceStatus === "Inactive" &&
                      "bg-red-100"
                    } ${
                      item?.deviceStatus === "Suspended" &&
                      "bg-orange-100"
                    }`}>
                    {" "}
                    {item?.deviceStatus}
                  </div>
                  </div>
                </td>
              </tr>
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
          {Math.min(endIndex, deviceManagementData?.length)} of{" "}
          {deviceManagementData?.length} entries
        </div>
      </div>
    </div>
  );
};

export default DeviceManagement;
