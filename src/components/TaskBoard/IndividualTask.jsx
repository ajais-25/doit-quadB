import { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Plus,
  Bell,
  Trash,
  Star,
  X,
} from "lucide-react";
import { completeTask, toggleStar, removeTask } from "../../features/taskSlice";
import { useDispatch } from "react-redux";
import Repeat from "../../assets/RightBar/repeat.png";
import BasicDateCalendar from "../BasicDateCalendar";

const IndividualTask = ({ task, isTaskStarred, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isStarred, setIsStarred] = useState(isTaskStarred);
  const [showCalendar, setShowCalendar] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed top-0 bottom-0 overflow-x-hidden overflow-y-scroll mt-15 right-0 z-60 w-full md:w-[350px] bg-green-50 shadow-lg border-l p-4 flex flex-col transition-all duration-300 ease-in-out`}
      style={{
        scrollbarWidth: "thin",
      }}
    >
      {/* Task Header */}
      <div className="flex items-center justify-between p-3 border-y border-[#496E4B33]">
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
          <span className="text-gray-800">{task.task}</span>
        </div>

        {/* Favorite (Star) Icon */}
        <Star
          className={`w-5 h-5 cursor-pointer ${
            isStarred ? "fill-black text-black" : "text-gray-400"
          }`}
          onClick={() => {
            dispatch(toggleStar(task.id));
            setIsStarred(!isStarred);
          }}
        />
      </div>

      {/* Task Options */}
      <div className="mt-4 space-y-3">
        <button className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-green-100 cursor-pointer">
          <Plus className="w-5 h-5" /> Add Step
        </button>
        <button className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-green-100 cursor-pointer">
          <Bell className="w-5 h-5" /> Set Reminder
        </button>

        {/* Date Picker */}
        {showCalendar && <BasicDateCalendar />}
        <button
          className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-green-100 cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <CalendarIcon className="w-5 h-5" />
          {showCalendar ? "Close Calendar" : "Add to Calendar"}
        </button>

        <button className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-green-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <img src={Repeat} alt="repeat" className="" />
            <span>Repeat</span>
          </div>
        </button>
        <textarea
          className="w-full p-2 mt-2 rounded-md border bg-white"
          placeholder="Add Notes"
        ></textarea>
      </div>

      {/* Footer */}
      <div className="mt-auto flex justify-between items-center p-2 border-t">
        <X
          className="w-5 h-5 cursor-pointer text-gray-500 hover:text-red-500"
          onClick={onClose}
        />
        <span className="text-sm text-gray-500">Created Today</span>
        <Trash
          className="w-5 h-5 cursor-pointer text-gray-500 hover:text-red-500"
          onClick={() => {
            dispatch(removeTask(task.id));
            onClose();
          }}
        />
      </div>
    </div>
  );
};

export default IndividualTask;
