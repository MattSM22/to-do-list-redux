import { InputTask } from "./components/input-task";
import { TaskList } from "./components/task-list";

export function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-96 h-5/6 bg-slate-900 rounded-md flex flex-col items-center">
        <InputTask />
        <TaskList />
      </div>
    </div>
  )
}
