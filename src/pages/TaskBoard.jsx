import TaskHeader from "../components/TaskBoard/TaskHeader";
import TaskList from "../components/TaskBoard/TaskList";
import CompletedTasks from "../components/TaskBoard/CompletedTasks";
import IndividualTask from "../components/TaskBoard/IndividualTask";
import { useState } from "react";

const TaskBoard = () => {
  const [selectedTask, setSelectedTask] = useState(null); // State to manage selected task

  return (
    <div className="flex mt-16 px-8 pt-6 w-full min-h-screen">
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
