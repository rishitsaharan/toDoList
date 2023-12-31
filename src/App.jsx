import { useState } from 'react'
import './App.css'
import {ToDoForm} from './toDoForm'
import {ToDoBody} from './ToDoBody'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'



function App  () {
  const token = useParams();
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/tasks", {
        params : token,
    })
    setTasks(response.data);
}
  const addTask = async () => {
    if(newTask.trim() != ""){
      await axios.post("http://localhost:3000/newTask", {
        jwtToken : token.token,
        task : newTask,
        isDone : false,
        isEditing : false
      })
      fetchData();
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='app'>
      <ToDoForm newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
      <ToDoBody tasks = {tasks} setTasks= { setTasks} fetchData={fetchData}/>
    </div>
  )
}

export default App;