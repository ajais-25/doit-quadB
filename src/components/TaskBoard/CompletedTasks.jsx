import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStar } from "../../features/taskSlice";

const CompletedTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="p-4 w-full">
      <h3 className="text-lg font-semibold">Completed</h3>
      {tasks ? (
        <ul className="space-y-2 mt-4">
          {tasks.map(
            (task) =>
              task.completed && (
                <li
                  key={task.id}
                  className="flex items-center justify-between p-3 border-t border-[#496E4B33] hover:bg-gray-100"
                >
                  {/* Checkbox and Task Name */}
                  <div className="flex items-center gap-3">
                    ✅{" "}
                    <span className="text-gray-600 line-through">
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
        <p className="text-gray-500">No completed tasks.</p>
      )}
    </div>
  );
};

export default CompletedTasks;
