import React from "react";
import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {
  
  if(tasks && tasks.length > 0) {
    return (
      <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
       ))}
       </>
     )
    }
   else return null;
}

export default Tasks;
