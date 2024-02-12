import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
  id: string;
  content: string;
  finalized?: boolean
}

const storedTasks = localStorage.getItem('tasks');

const initialState: TaskState[] = storedTasks ? JSON.parse(storedTasks) : [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<TaskState>) => {
      return state.concat(action.payload);
    },
    finalizeTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const taskToUpdate = state.find(task => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.finalized = !taskToUpdate.finalized;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const deleteTask = state.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(deleteTask));

      return deleteTask;
    }
  }
});

export const { createTask, finalizeTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;