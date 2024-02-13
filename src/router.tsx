import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login-page";
import { Task } from "./pages/task-page";
import { Root } from "./pages/root";

export function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Root /> }>
          <Route path="/" element={ <Login /> }/>
          <Route path="tasks" element={<Task />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}