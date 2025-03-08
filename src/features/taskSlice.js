import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gridView: false,
  tasks: [
    {
      id: 1,
      task: "Task 1",
      starred: false,
      completed: false,
    },
    {
      id: 2,
      task: "Task 2",
      starred: false,
      completed: false,
    },
    {
      id: 3,
      task: "Task 3",
      starred: false,
      completed: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.gridView = !state.gridView;
    },
    addTask: (state, action) => {
      const newTask = {
        id: action.payload,
        task: action.payload,
        starred: false,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      task.completed = true;
    },
    toggleStar: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      task.starred = !task.starred;
    },
  },
});

export const { toggleView, addTask, removeTask, completeTask, toggleStar } =
  taskSlice.actions;
export default taskSlice.reducer;
