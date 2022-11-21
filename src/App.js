
import './index.css';
import TaskInput from "./TaskInput";
import Tasks from "./Tasks";
import {useEffect, useState} from "react";

function App() {



  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);

  function update(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }
  function add(name) {
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    });
  }

  function remove(indexToRemove) {
    setTasks(prev => {
      return prev.filter((taskObject,index) => index !== indexToRemove);
    });
  }

  
    return (
    <main>
      <TaskInput onAdd={add} />
      {tasks.map((task,index) => (
        <Tasks {...task}
          onTrash={() => remove(index)}
          onToggle={done => update(index, done)} />
        ))}
  </main>

  );
}

export default App;
