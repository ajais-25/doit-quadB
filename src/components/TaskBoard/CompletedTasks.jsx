const CompletedTasks = ({ completedTasks }) => {
  return (
    <div className="p-4 w-full">
      <h3 className="text-lg font-semibold">Completed</h3>
      {completedTasks && completedTasks.length > 0 ? (
        <ul>
          {completedTasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-2 bg-green-100 border-b rounded-md"
            >
              ✅ <span className="text-gray-600 line-through">{task}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No completed tasks.</p>
      )}
    </div>
  );
};

export default CompletedTasks;
