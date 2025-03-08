import React from "react";
import {
  ListChecks,
  Star,
  CalendarDays,
  User,
  CalendarCheck,
} from "lucide-react";

const Sidebar = (isOpen) => {
  return (
    <div
      className={`w-64 ml-8 bg-green-50 h-screen p-4 flex flex-col items-center relative
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    transition-transform duration-300 ease-in-out
    `}
    >
      {/* Profile Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 flex flex-col items-center">
        <img
          src="https://picsum.photos/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
        <p className="mt-2 font-semibold">Hey, ABCD</p>
      </div>
      {/* Menu Items */}
      <div className="mt-17 w-full bg-[#FBFDFC] p-4 rounded-lg shadow-md">
        <ul className="space-y-1">
          <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-green-100 active:bg-green-200">
            <ListChecks className="mr-3" size={20} /> All Tasks
          </li>
          <li className="flex items-center p-2 bg-green-200 rounded-lg cursor-pointer text-green-500">
            <CalendarDays className="mr-3" size={20} /> Today
          </li>
          <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-green-100 active:bg-green-200">
            <Star className="mr-3" size={20} /> Important
          </li>
          <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-green-100 active:bg-green-200">
            <CalendarCheck className="mr-3" size={20} /> Planned
          </li>
          <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-green-100 active:bg-green-200">
            <User className="mr-3" size={20} /> Assigned to me
          </li>
        </ul>
      </div>
      {/* Add List */}
      <div className="mt-1 w-full bg-[#FBFDFC] cursor-pointer shadow-md rounded-sm hover:bg-green-100 p-2 text-center">
        <button className="text-green-600 font-semibold">+ Add list</button>
      </div>
      {/* Stats Section */}
      <div className="mt-4 w-full bg-[#FBFDFC] shadow-md p-4 rounded-lg">
        <p className="font-semibold">Today Tasks</p>
        <p className="text-2xl font-bold">11</p>
        <div className="flex justify-center items-center mt-2">
          <svg className="w-16 h-16" viewBox="0 0 36 36">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="3"
              cx="18"
              cy="18"
              r="15"
              fill="none"
            ></circle>
            <circle
              className="text-green-500 stroke-current"
              strokeWidth="3"
              cx="18"
              cy="18"
              r="15"
              fill="none"
              strokeDasharray="60, 100"
            ></circle>
          </svg>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <span className="text-gray-600">Pending</span>
          <span className="text-green-600">Done</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
