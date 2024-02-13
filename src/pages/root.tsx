import { useLocation } from "react-router-dom";
import { Login } from "./login-page";
import { Task } from "./task-page";

export function Root(){
  const location = useLocation();

  console.log(location.pathname)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      { 
        location.pathname === "/" ? <Login /> : location.pathname === "/tasks" ? <Task /> : ""
      }
    </div>
  );
}