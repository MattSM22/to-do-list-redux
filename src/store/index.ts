import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskSlice from "./reducers/task";

const rootReducer = combineReducers({
  task: taskSlice
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>