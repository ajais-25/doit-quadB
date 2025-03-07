import React, { useState } from "react";
import { Bell, RefreshCcw, Calendar, ChevronDown } from "lucide-react";

const TaskHeader = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask(""); // Clear input
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="w-full bg-green-50 border border-green-300 rounded-lg p-4 flex-col items-center shadow-sm">
      {/* Task Input Section */}
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-lg font-semibold">To Do</h2>
        <ChevronDown className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
      <div className="w-full md:w-auto flex items-center space-x-2">
        <input
          type="text"
          name="task"
          id="task"
          className="w-full pb-20 p-2 border rounded-lg"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a task..."
        />
      </div>

      <div className="flex mt-4 justify-between items-center">
        {/* Icons Section */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Bell className="text-gray-700 cursor-pointer" size={20} />
          <RefreshCcw className="text-gray-700 cursor-pointer" size={20} />
          <Calendar className="text-gray-700 cursor-pointer" size={20} />
        </div>

        {/* Add Task Button */}
        <button
          className="mt-2 md:mt-0 bg-green-600 text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-green-700 transition-all text-sm"
          onClick={handleAddTask}
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default TaskHeader;
