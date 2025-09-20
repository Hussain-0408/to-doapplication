import React from 'react';
import "../styles/ToDoList.css";

function ToDoListarea({ tasks, setTasks }) {
    const toggleComplete = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index); // remove by index
        setTasks(newTasks);
    };

    return (
        <div className='todolist-Rootcontainer'>
            <div className='todolist-childcontainer'>
                <div className='todolist-heading'>
                    <h2>To-Do List</h2>
                </div>
                <div className='todo-listcontainer'>
                    {tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            
                                <input
                                    type='checkbox'
                                    checked={task.completed}
                                    onChange={() => toggleComplete(index)}
                                    id='triger'
                                />
                                <p style={{ textDecoration: task.completed }}>
                                    {task.text}
                                </p>
                           
                            <button className="delete-btn" onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ToDoListarea;
