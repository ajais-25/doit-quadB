import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import IndividualTask from "./IndividualTask"; // Import IndividualTask
import { useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [favorites, setFavorites] = useState([]); // Store favorite tasks
  const [selectedTask, setSelectedTask] = useState(null); // State to manage selected task

  // ✅ Function to add a new task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
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
    <div className="flex mt-16 px-8 pt-6 w-full min-h-screen bg-gray-100">
      <div
        className={`flex flex-col items-center ${
          selectedTask ? "w-[calc(100%-350px)]" : "w-full"
        }`}
      >
        <TaskHeader addTask={addTask} />
        <TaskList
          tasks={tasks}
          completeTask={completeTask}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          removeTask={removeTask}
          setSelectedTask={setSelectedTask} // Pass setSelectedTask to TaskList
        />
        <CompletedTasks
          completedTasks={completedTasks}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
      {selectedTask && (
        <IndividualTask
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          completeTask={completeTask}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          index={tasks.indexOf(selectedTask)}
          removeTask={removeTask}
        />
      )}
    </div>
  );
};

export default TaskBoard;
