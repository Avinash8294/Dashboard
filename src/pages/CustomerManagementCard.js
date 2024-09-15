import React from "react";

const CustomerManagementCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border-2 w-[33%] font-regular">
      <div className="text-2xl font-bold mb-4 text-cardHeading">
        Customer Management
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-6xl font-bold mr-2">42</span>
          <span className="text-gray-400 font-semibold">Total Customers</span>
        </div>
      </div>

      <div className="flex mt-4 bg-cardBaseColor w-full divide-x-2 justify-center pt-5 pb-2">
        <div className="flex flex-col p-4 rounded-lg items-center justify-center gap-3 flex-1">
          <span className="text-2xl  bg-cardActive w-14 h-14 center p-3 rounded-full text-white">
            64
          </span>
          <h3 className="text-lg font-bold mb-2 text-[1vw] text-nowrap text-subtitleColor">
            Active Customers
          </h3>
        </div>

        <div className="flex flex-col p-4 rounded-lg items-center justify-center gap-3 flex-1">
          <span className="text-2xl  bg-cardDander w-14 h-14 center rounded-full text-white">
            43
          </span>
          <h3 className="text-lg font-bold mb-2 text-[1vw] text-nowrap text-subtitleColor">
            Inactive Customers
          </h3>
        </div>
      </div>

      <div className="font-bold text-2xl text-[#1E4154] mt-10">
        Customers by Type
      </div>
      <div className="flex mt-4 bg-cardBaseColor w-full divide-x-2 justify-center pt-5 pb-2">
        <div className="flex flex-col p-4 rounded-lg items-center justify-center gap-3 flex-1">
          <span className="text-2xl  bg-[#1E4154] w-14 h-14 center p-3 rounded-full text-white">
            64
          </span>
          <h3 className="text-lg font-bold mb-2 text-subtitleColor">
          Parent
          </h3>
        </div>

        <div className="flex flex-col p-4 rounded-lg items-center justify-center gap-3 flex-1">
          <span className="text-2xl  bg-[#ED8D77] w-14 h-14 center p-3 rounded-full text-white">
            64
          </span>
          <h3 className="text-lg font-bold mb-2 text-[1vw] text-nowrap text-subtitleColor">
          Caretaker
          </h3>
        </div>

        <div className="flex flex-col p-4 rounded-lg items-center justify-center gap-3 flex-1">
          <span className="text-2xl  bg-[#409EAD] w-14 h-14 center rounded-full text-white">
            43
          </span>
          <h3 className="text-lg font-bold mb-2 text-[1vw] text-nowrap text-subtitleColor">
          Co-parent
          </h3>
        </div>
      </div>

      <div className="center pt-9 pb-2">
        <button className=" border-2 text-xl px-6 py-1 rounded-md text-gray-700 font-semibold">
          View All
        </button>
      </div>
    </div>
  );
};

export default CustomerManagementCard;
