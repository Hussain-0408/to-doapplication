import React, { useState } from 'react';
import "../styles/Inputarea.css";

function Inputarea({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  const addTask = () => {
   
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    
      setTask("");
    const confirmation = window.confirm("Task added succesfully")
    if(confirmation){
      setTasks([...tasks, { text: task, completed: false }]);
      
    }
  }

  return (
    <div className='Input-Rootcontainer'>
      <div className='input-childcontainer'>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Add a new todo..'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className='button-container'>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  )
}

export default Inputarea;
