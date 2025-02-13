import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTodo = () => {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
    }
    setNewTask("");
  };

  const moveUp = (i)=>{
    const updatedTasks = [...task]
    if(i > 0){
        [updatedTasks[i], updatedTasks[i-1]] = [updatedTasks[i-1], updatedTasks[i]]
        setTask(updatedTasks)
    }
  }

  const moveDown = (i) => {
    const updatedTasks = [...task]
    if(i < task.length - 1){
      [updatedTasks[i], updatedTasks[i+1]] = [updatedTasks[i+1], updatedTasks[i]]
      setTask(updatedTasks)
  }
  console.log("bhosda teri maa ka");
  
  }

  const deleteTodo = (i) => {
    const filteredTasks = task.filter((_, j) => j !== i);
    setTask(filteredTasks)
    
  };
  return (
    <>
      <div className="todo">
        <h1>To-Do App</h1>
        <div className="search">
          <input
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            placeholder="Enter todo"
            type="text"
            value={newTask}
            name=""
            id=""
          />
          <button
            onClick={() => {
              addTodo();
            }}
          >
            Add
          </button>
        </div>
        <div className="todos">
          <ol>
            {task.map((ttask,ind)=>
            <li key={ind}><span>{ttask}</span>
            <button onClick={()=>{deleteTodo(ind)}}>Delete</button>
            <button onClick={()=>moveUp(ind)}>Up</button>
            <button onClick={()=>moveDown(ind)}>Down</button>
            </li>)}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
