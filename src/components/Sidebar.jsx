import { Star } from "lucide-react";
import Avatar from "../assets/Sidebar/avatar.png";
import Menu from "../assets/Sidebar/Menu/menu.png";
import Calendar from "../assets/Sidebar/Menu/calendar.png";
import Clock from "../assets/Sidebar/Menu/clock.png";
import Assign from "../assets/Sidebar/Menu/assign.png";
import Plus from "../assets/Sidebar/Menu/plus.png";
import Info from "../assets/Sidebar/Menu/info.png";
import CircularProgress from "./CircularProgress";

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
          src={Avatar}
          alt="avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
        <p className="mt-2 font-semibold">Hey, ABCD</p>
      </div>
      {/* Menu Items */}
      <div className="mt-17 w-full bg-[#FBFDFC] p-4 rounded-lg shadow-md">
        <ul className="space-y-1">
          <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-green-100 active:bg-green-200">
            <div className="flex items-center gap-2">
              <img src={Menu} alt="menu" className="" />
              <span>All Tasks</span>
            </div>
          </li>
          <li className="flex items-center p-2 bg-green-200 rounded-lg cursor-pointer text-green-500">
            <div className="flex items-center gap-2">
              <img src={Calendar} alt="calendar" className="" />
              <span>Today</span>
            </div>
          </li>
          <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-green-100 active:bg-green-200">
            <Star className="mr-3" size={20} /> Important
          </li>
          <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-green-100 active:bg-green-200">
            <div className="flex items-center gap-2">
              <img src={Clock} alt="clock" className="" />
              <span>Planned</span>
            </div>
          </li>
          <li className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-green-100 active:bg-green-200">
            <div className="flex items-center gap-2">
              <img src={Assign} alt="assign" className="" />
              <span>Assigned to me</span>
            </div>
          </li>
        </ul>
      </div>
      {/* Add List */}
      <div className="mt-1 w-full bg-[#FBFDFC] cursor-pointer shadow-md rounded-sm hover:bg-green-100 p-3 text-center">
        <button className="font-semibold flex items-center justify-center gap-2">
          <img src={Plus} alt="plus" />
          Add list
        </button>
      </div>
      {/* Stats Section */}
      <div className="mt-2 w-full bg-[#FBFDFC] shadow-md p-4 rounded-lg relative">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Today Tasks</p>
          <div className="cursor-pointer">
            <img src={Info} alt="info" />
          </div>
        </div>
        <p className="text-2xl font-bold">11</p>
        <div className="flex justify-center items-center mt-2">
          <CircularProgress progress={70} />
        </div>
        <div className="flex gap-4 text-xs mt-2">
          <span className="text-gray-600 flex items-center gap-1">
            <div className="w-2 h-2 bg-[#3F9142] rounded"></div>
            Pending
          </span>
          <span className="text-gray-600 flex items-center gap-1">
            <div className="w-2 h-2 bg-[#142E15] rounded"></div>
            Done
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
