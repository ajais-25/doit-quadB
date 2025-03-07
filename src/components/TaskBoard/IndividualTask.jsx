import { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Plus,
  Bell,
  Repeat,
  Trash,
  Star,
  X,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const IndividualTask = ({
  task,
  onClose,
  completeTask,
  favorites,
  toggleFavorite,
  index,
  removeTask,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed top-0 bottom-0 mt-15 right-0 w-full md:w-[350px] bg-green-50 shadow-lg border-l p-4 flex flex-col transition-transform duration-500 ease-in-out transform ${
        isMobile ? "translate-x-0" : "translate-x-0"
      }`}
    >
      {/* Task Header */}
      <div className="flex items-center justify-between p-3 border-y border-[#496E4B33]">
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
            favorites.includes(task) ? "fill-black text-black" : "text-gray-400"
          }`}
          onClick={() => toggleFavorite(task)}
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
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center justify-between w-full p-2 rounded-md hover:bg-green-100 cursor-pointer">
              <span className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" /> Add Due Date
              </span>
              {selectedDate && (
                <span className="text-sm">
                  {format(selectedDate, "MMM dd")}
                </span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-2">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </PopoverContent>
        </Popover>

        <button className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-green-100 cursor-pointer">
          <Repeat className="w-5 h-5" /> Repeat
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
        <Trash className="w-5 h-5 cursor-pointer text-gray-500 hover:text-red-500" />
      </div>
    </div>
  );
};

export default IndividualTask;
