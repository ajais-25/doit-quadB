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
      <div className="fixed h-screen z-50 overflow-hidden transition-all duration-300">
        <TopBar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <div className={`flex-grow ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;
