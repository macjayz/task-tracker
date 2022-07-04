import React from "react";
import Task from "./Task";

const Tasks = ({tasks}) => {
  console.log(tasks)
  if(tasks && tasks.length > 0) {
    return (
      <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
       ))}
       </>
     )
    }
   else return null;
}

export default Tasks;
