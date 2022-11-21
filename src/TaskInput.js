
import {useState} from "react";

export default function TaskInput({onAdd}) {
  const [taskName,setTaskName] = useState('');
  function handleSubmit(ev) {
    if(taskName==='') {
        alert('empty field'); 
        return;}
    ev.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input type="text"
             value={taskName}
             onChange={ev => setTaskName(ev.target.value)}
             placeholder="Next Task"/>
    </form>
  );
}