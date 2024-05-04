
import { createSlice } from '@reduxjs/toolkit';

// Load tasks from localStorage
const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      console.log("state",action.payload)
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
        const idToDelete = action.payload;
        const newState = state.filter(task => task.id !== idToDelete);
        localStorage.setItem('tasks', JSON.stringify(newState));
        return newState;
      }
  }
});

export const { addTask , deleteTask} = taskSlice.actions;
export default taskSlice.reducer;
