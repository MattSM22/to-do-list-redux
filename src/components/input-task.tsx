import { Check } from "lucide-react";
import { useDispatch } from "react-redux";
import { createTask } from "../store/reducers/task";
import { ChangeEvent, FormEvent, useState } from "react";

export function InputTask(){
  const [taskContent, setTaskContent] = useState<string>('');
  const dispatch = useDispatch();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    setTaskContent(event.target.value.toUpperCase());
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();

    dispatch(createTask({ id: crypto.randomUUID(), content: taskContent.toUpperCase(), finalized: false}));
    setTaskContent('');
  }

  return (
    <form className="flex flex-row items-center justify-center gap-3 my-6">
      <input 
        value={taskContent} 
        onChange={handleInputChange} 
        className="w-72 py-1 border-b-2 bg-transparent border-slate-800 text-slate-400 text-sm outline-none focus-visible:border-lime-600" 
        type="text" placeholder="Write a task..."
      />
      <button onClick={handleCreateNewTask} className="bg-lime-600 border-none rounded-sm hover:bg-lime-700">
        <Check className="text-white size-4" /> 
      </button>
    </form>
  )
}