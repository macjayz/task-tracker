import React from "react";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
// import Message from './components/Message';
// import FunctionClick from './components/FunctionClick';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "This is the first text",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "third meeting",
      day: "Feb 6th at 1:30pm",
      reminder: true
    }
  ]);
  // add tasks
  const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
  }

  //delete tasks
  const deleteTask = (id) => {
      setTasks(tasks.filter((task)=>task.id !== id))
  }

  //toggle tasks 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder}: task))
  }
  return (
    <div className="container"> 
      <Navbar onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>
      ) : ('No Task to Display'
      )}
    </div>
  );
};

export default App;
