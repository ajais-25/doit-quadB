import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import { useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const completedTask = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index)); // Remove from active list
    setCompletedTasks([...completedTasks, completedTask]); // Add to completed
  };

  return (
    <div className="flex flex-col mt-16 px-8 py-6 items-center w-full min-h-screen bg-gray-100">
      <TaskHeader addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} />
      <CompletedTasks completedTasks={completedTasks} />
    </div>
  );
};

export default TaskBoard;
