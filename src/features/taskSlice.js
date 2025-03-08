import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk("getTasks", async () => {
  const response = await fetch("https://dummyjson.com/todos?limit=5&skip=0");
  const data = await response.json();
  return data.todos;
});

const initialState = {
  gridView: false,
  tasks: [],
  isLoading: false,
  isError: false,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      const tasks = action.payload.map((task) => ({
        id: task.id,
        task: task.todo,
        starred: false,
        completed: false,
      }));
      state.isLoading = false;
      state.isError = false;
      state.tasks = tasks;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.tasks = [];
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(getTasks.pending, (state, action) => {
      state.tasks = [];
      state.isLoading = true;
    });
  },
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
