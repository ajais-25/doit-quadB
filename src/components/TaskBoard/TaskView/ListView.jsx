import { Star } from "lucide-react";
import { completeTask, toggleStar } from "../../../features/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const ListView = ({ onClose, setSelectedTask }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tasks);

  const tasks = state.tasks;

  return (
    <>
      <div className="p-4 w-full">
        {state.isLoading && (
          <p className="text-gray-500 text-center">Loading...</p>
        )}
        {state.isError && (
          <p className="text-red-500 text-center">An error occurred.</p>
        )}
        {tasks ? (
          <ul className="space-y-2">
            {tasks.map(
              (task) =>
                task.completed === false && (
                  <li
                    key={task.id}
                    className="flex items-center justify-between p-3 border-b border-[#496E4B33] hover:bg-gray-100"
                  >
                    {/* Checkbox and Task Name */}
                    <div className="flex items-center gap-3">
                      <div
                        onClick={() => {
                          dispatch(completeTask(task.id));
                          onClose();
                        }}
                        className="cursor-pointer w-5 h-5
                          border-2 border-gray-400 rounded-sm flex items-center justify-center
                          hover:border-green-500 transition-colors duration-300
                        "
                      ></div>
                      <span
                        className="text-gray-800 cursor-pointer hover:underline"
                        onClick={() => setSelectedTask(task)}
                      >
                        {task.task}
                      </span>
                    </div>

                    {/* Favorite (Star) Icon */}
                    <Star
                      className={`w-5 h-5 cursor-pointer ${
                        task.starred ? "fill-black text-black" : "text-gray-400"
                      }`}
                      onClick={() => dispatch(toggleStar(task.id))}
                    />
                  </li>
                )
            )}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No tasks available.</p>
        )}
      </div>
    </>
  );
};

export default ListView;
