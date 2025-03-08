import GridView from "./TaskView/GridView";
import ListView from "./TaskView/ListView";
import { useSelector } from "react-redux";

const TaskList = ({
  onClose,
  setSelectedTask, // Add setSelectedTask prop
}) => {
  const gridView = useSelector((state) => state.tasks.gridView);

  return (
    <>
      {gridView ? (
        <GridView onClose={onClose} setSelectedTask={setSelectedTask} />
      ) : (
        <ListView onClose={onClose} setSelectedTask={setSelectedTask} />
      )}
    </>
  );
};

export default TaskList;
