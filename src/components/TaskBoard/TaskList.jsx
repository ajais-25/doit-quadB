import { Star } from "lucide-react";

const TaskList = ({ tasks, completeTask, toggleFavorite, favorites }) => {
  return (
    <div className="p-4 w-full">
      {tasks.length > 0 ? (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 border-b hover:bg-gray-100"
            >
              {/* Checkbox and Task Name */}
              <div className="flex items-center gap-3">
                <div
                  onClick={() => completeTask(index)}
                  className="cursor-pointer w-5 h-5
                    border-2 border-gray-400 rounded-sm flex items-center justify-center
                    hover:border-green-500 transition-colors duration-300
                  "
                ></div>
                <span className="text-gray-800">{task}</span>
              </div>

              {/* Favorite (Star) Icon */}
              <Star
                className={`w-5 h-5 cursor-pointer ${
                  favorites.includes(task)
                    ? "fill-black text-black"
                    : "text-gray-400"
                }`}
                onClick={() => toggleFavorite(task)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
