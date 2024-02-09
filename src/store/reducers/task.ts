import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
  id: string;
  content: string;
  finalized?: boolean
}

const initialState: TaskState[] = []

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<TaskState>) => {
      state.push(action.payload);
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
      return state.filter(task => task.id !== taskId);
    }
  }
});

export const { createTask, finalizeTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;