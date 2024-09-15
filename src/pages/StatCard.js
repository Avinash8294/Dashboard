import React from 'react';

function StatCard({ title, total, activeLabel, inactiveLabel, additionalInfo }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="text-5xl font-bold mb-4">{total}</div>
      <p className="text-sm text-gray-600 mb-2">Total {title.split(" ")[0]}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex-1 text-center">
          <p className="text-sm">{activeLabel}</p>
          <div className="text-xl text-teal-500">21</div>
        </div>
        <div className="flex-1 text-center">
          <p className="text-sm">{inactiveLabel}</p>
          <div className="text-xl text-red-500">21</div>
        </div>
      </div>
      {additionalInfo && (
        <div className="flex justify-around mt-4">
          {additionalInfo.map((info, index) => (
            <div key={index} className="text-center">
              <p className="text-sm">{info}</p>
              <div className="text-xl text-gray-600">21</div>
            </div>
          ))}
        </div>
      )}
      <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-4 rounded-md">
        View All
      </button>
    </div>
  );
}

export default StatCard;
