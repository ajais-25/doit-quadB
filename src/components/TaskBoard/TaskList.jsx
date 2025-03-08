import { useEffect } from "react";
import GridView from "./TaskView/GridView";
import ListView from "./TaskView/ListView";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../features/taskSlice";

const TaskList = ({
  onClose,
  setSelectedTask, // Add setSelectedTask prop
}) => {
  const gridView = useSelector((state) => state.tasks.gridView);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

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
