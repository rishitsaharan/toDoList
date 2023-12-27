import { useState } from 'react'
import './App.css'
import {ToDoForm} from './toDoForm'
import {ToDoBody} from './ToDoBody'

function App () {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  let id = 1;
  function getId() {
    id++
    return id - 1;
  }
  const addTask = () => {
    if(newTask.trim() != ""){
      setTasks([... tasks, {task : newTask, id : () => getId(), isDone : false, isEditing : false}]);
    }
  }
  return (
    <div className='app'>
      <ToDoForm newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
      <ToDoBody tasks = {tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App;
