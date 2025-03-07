import { Star } from "lucide-react";

const CompletedTasks = ({ completedTasks, favorites, toggleFavorite }) => {
  return (
    <div className="p-4 w-full">
      <h3 className="text-lg font-semibold">Completed</h3>
      {completedTasks && completedTasks.length > 0 ? (
        <ul className="space-y-2 mt-4">
          {completedTasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 border-t border-[#496E4B33] hover:bg-gray-100"
            >
              {/* Checkbox and Task Name */}
              <div className="flex items-center gap-3">
                ✅ <span className="text-gray-600 line-through">{task}</span>
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
            // <li
            //   key={index}
            //   className="flex items-center gap-2 p-2 bg-green-100 border-b rounded-md"
            // >
            //    <span className="text-gray-600 line-through">{task}</span>
            // </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No completed tasks.</p>
      )}
    </div>
  );
};

export default CompletedTasks;
