const TaskList = ({ tasks, completeTask }) => {
  return (
    <div className="p-4 w-full">
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks &&
            tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 border-b"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() => completeTask(index)}
                    className="cursor-pointer"
                  />
                  <span className="text-gray-800">{task}</span>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
