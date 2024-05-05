
import { createSlice } from '@reduxjs/toolkit';

// Load tasks from localStorage
const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
        const idToDelete = action.payload;
        const newState = state.filter(task => task.id !== idToDelete);
        localStorage.setItem('tasks', JSON.stringify(newState));
        return newState;
      },
      toggleTaskCompletion: (state, action) => {
        const taskId = action.payload;
        const taskToUpdate = state.find(task => task.id === taskId);
        if (taskToUpdate) {
          taskToUpdate.isCompleted = !taskToUpdate.isCompleted;
          localStorage.setItem('tasks', JSON.stringify(state));
        }
      }
  }
});

export const { addTask , deleteTask,toggleTaskCompletion} = taskSlice.actions;
export default taskSlice.reducer;
