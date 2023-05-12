import { createSlice } from '@reduxjs/toolkit';

export const initializeTasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  return storedTasks || [];
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initializeTasks(),
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date().getTime(),
        name: action.payload.task,
        status: 'pending',
        description: '',
      };
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.filter((item) => item.id !== action.payload);
      state.splice(0, state.length, ...updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    updateTask: (state, action) => {
      const { id, title, status } = action.payload;
      const task = state.find((item) => item.id === id);
      if (task) {
        task.name = title || task.name;
        task.status = status || task.status;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
    updateTaskDescription: (state, action) => {
      const { id, description } = action.payload;
      const task = state.find((item) => item.id === id);
      if (task) {
        task.description = description;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
    deleteAllTasks: (state) => {
      return [];
    },
  },
});

export const { addTask, deleteTask, updateTask, deleteAllTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
