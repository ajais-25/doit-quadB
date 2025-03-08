import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import TaskBoard from "./components/TaskBoard/TaskBoard";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed h-screen z-50 overflow-hidden pt-28 transition-all duration-300 ${
          isSidebarOpen ? "w-80" : "w-0"
        }`}
      >
        <TopBar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-70" : "ml-0"
        }`}
      >
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;
