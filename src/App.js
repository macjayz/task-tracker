import React from "react";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Tasks from "./components/Tasks";
// import Message from './components/Message';
// import FunctionClick from './components/FunctionClick';

const App = () => {
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

  return (
    <div className="container">
      <Navbar />
      <Tasks tasks={tasks} />
      
    </div>
  );
};

export default App;
