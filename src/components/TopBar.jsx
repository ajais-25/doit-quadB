import React from "react";
import { Menu, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../features/taskSlice";
import Logo from "../assets/logo.png";
import Grid from "../assets/View/grid.png";
import List from "../assets/View/list.png";
import Dark from "../assets/Theme/dark.png";

const TopBar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();

  const gridView = useSelector((state) => state.tasks.gridView);

  return (
    <div className="flex items-center justify-between p-4 px-8 border-b shadow-sm bg-white w-full fixed top-0 left-0 right-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Menu className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
        <div className="flex items-center gap-1">
          <img src={Logo} alt="Logo" className="w-6 h-6" />
          <span className="text-xl font-[sen] font-semibold text-[#3F9142]">
            DoIt
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 cursor-pointer hidden md:block" />
        <div
          className="w-5 h-5 cursor-pointer"
          onClick={() => dispatch(toggleView())}
        >
          <img src={gridView ? List : Grid} alt="view" />
        </div>
        <div className="w-5 h-5 cursor-pointer">
          <img src={Dark} alt="view" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
