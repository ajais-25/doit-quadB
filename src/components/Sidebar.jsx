import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-15 left-10 pt-8 pb-22 overflow-y-scroll h-full w-64 bg-[#F5F9F6] shadow-md p-4 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative`}
      style={{
        scrollbarWidth: "thin",
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <img
          src="https://picsum.photos/300/300"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <span className="text-lg font-semibold text-gray-800">Hey, ABCD</span>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
            📋 All Tasks
          </li>
          <li className="flex items-center gap-2 p-3 rounded-md bg-green-200 cursor-pointer">
            📅 Today
          </li>
          <li className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
            ⭐ Important
          </li>
          <li className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
            📖 Planned
          </li>
          <li className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
            👥 Assigned to me
          </li>
          <li className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
            ➕ Add list
          </li>
        </ul>
      </nav>

      {/* Task Chart Section */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center text-sm text-gray-700">
          <span className="font-semibold">Today's Tasks</span>
          <span className="cursor-pointer">ℹ️</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">11</p>
        {/* Replace with actual chart */}
        <div className="w-full h-32 bg-gray-200 rounded-full flex items-center justify-center mt-2">
          📊 (Chart Here)
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>🟢 Done</span>
          <span>⚫ Pending</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
