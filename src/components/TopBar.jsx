import React from "react";
import { Menu, Search, Grid, Moon } from "lucide-react";

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b shadow-sm bg-white w-full fixed top-0 left-0 right-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Menu className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="Logo" className="w-6 h-6" />
          <span className="text-lg font-semibold text-green-700">DoIt</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 cursor-pointer hidden md:block" />
        <Grid className="w-5 h-5 cursor-pointer" />
        <Moon className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
