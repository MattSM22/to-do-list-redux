import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { Check, Trash } from "lucide-react";
import * as CheckBox from "@radix-ui/react-checkbox";
import { deleteTask, finalizeTask } from "../store/reducers/task";

export function TaskList() {
  const tasks = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();

  function handleFinalizedTask(taskId: string){
    dispatch(finalizeTask(taskId));
  }

  function handleDeleteTask(taskId: string){
    dispatch(deleteTask(taskId))
  }

  return (
    <div className="flex flex-col items-start justify-start w-full px-6">
      {tasks.map(task => (
        <div key={task.id} className="flex flex-row items-center justify-start gap-2 w-full py-2">
          <CheckBox.Root onClick={() => handleFinalizedTask(task.id)} className="bg-slate-500 w-4 h-4 rounded-md flex items-center justify-center shadow-sm hover:bg-slate-700 focus:bg-slate-500 focus-visible:border-lime-500 focus-visible:outline-none" key={task.id}>
            <CheckBox.Indicator className="text-lime-500">
              <Check className="text-slate-50 size-2" />
            </CheckBox.Indicator>
          </CheckBox.Root>
          <label className={`${task.finalized ? 'text-slate-700' : 'text-slate-500'} text-xs flex-1 ${task.finalized ? 'line-through' : 'no-underline'}`}>
            {task.content}
          </label>
          <button type="button" onClick={() => handleDeleteTask(task.id)}>
            <Trash className="text-red-500 size-3" />
          </button>
        </div>
      ))}
    </div>
  )
}