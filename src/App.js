import React,{useState} from 'react';
import './App.css';
import Inputarea from './components/Inputarea';
import ToDoListarea from './components/ToDoListarea';

function App() {

const [tasks, setTasks] =useState([]);


  return (
    <div className='Rootcomponent' >
      <h1 style={{textAlign:"center",fontFamily:"sans-serif",fontSize:"40px",marginTop:"0px",padding:"1rem"}}>To-Do Application</h1>
      <Inputarea  tasks = {tasks} setTasks={setTasks}/>
      <ToDoListarea tasks = {tasks} setTasks= {setTasks} />
    </div>
  );
}

export default App;
