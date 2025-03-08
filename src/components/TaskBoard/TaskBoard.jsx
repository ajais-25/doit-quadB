import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import IndividualTask from "./IndividualTask"; // Import IndividualTask
import { useState } from "react";

const TaskBoard = () => {
  const [selectedTask, setSelectedTask] = useState(null); // State to manage selected task

  return (
    <div className="flex mt-16 px-8 pt-6 w-full min-h-screen bg-gray-100">
      <div
        className={`flex flex-col items-center ${
          selectedTask ? "w-[calc(100%-350px)]" : "w-full"
        }`}
      >
        <TaskHeader />
        <TaskList
          onClose={() => setSelectedTask(null)}
          setSelectedTask={setSelectedTask} // Pass setSelectedTask to TaskList
        />
        <CompletedTasks />
      </div>
      {selectedTask && (
        <IndividualTask
          task={selectedTask}
          isTaskStarred={selectedTask.starred}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
};

export default TaskBoard;
