import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import { useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [favorites, setFavorites] = useState([]); // Store favorite tasks

  // ✅ Function to add a new task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // ✅ Function to mark a task as completed
  const completeTask = (index) => {
    setCompletedTasks((prevCompletedTasks) => [
      ...prevCompletedTasks,
      tasks[index],
    ]);
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  // ✅ Function to toggle favorite (star) tasks
  const toggleFavorite = (task) => {
    setFavorites(
      (prevFavorites) =>
        prevFavorites.includes(task)
          ? prevFavorites.filter((fav) => fav !== task) // Remove if already favorited
          : [...prevFavorites, task] // Add to favorites
    );
  };

  return (
    <div className="flex flex-col mt-16 px-8 pt-6 items-center w-full min-h-screen bg-gray-100">
      <TaskHeader addTask={addTask} />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
      <CompletedTasks
        completedTasks={completedTasks}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default TaskBoard;
