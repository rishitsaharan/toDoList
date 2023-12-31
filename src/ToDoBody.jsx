import { useEffect, useState } from "react";
import { ToDoTask } from "./ToDoTask";
import { ToDoEdit } from "./ToDoEdit";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ToDoBody = ({tasks, setTasks, fetchData}) => {
    // const [tasks, setTasks] = useState([]);
    const token = useParams();

    async function switchEditMode(id) {
        try{
            await axios.post("http://localhost:3000/switchEdit", {
                jwtToken : token.token,
                id : id
            });
            fetchData();
        }
        catch(err){
            console.log("Error Editing the task");
        }
    }
    async function handleEdit(content, id) {
        try{
            await axios.post("http://localhost:3000/edit", {
                jwtToken : token.token,
                id : id,
                task : content
            });
            fetchData();
        }
        catch(err){
            console.log("Error saving the edited task");
        }
    }
    async function handleDelete(deleteid) {
        try{
            await axios.post("http://localhost:3000/delete", {
                jwtToken : token.token,
                deleteid : deleteid
            });
            fetchData();
        }
        catch(err){
            console.log("Error deleting the task");
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="tasksSection">
            {tasks && tasks.map((task) => (
                task.isEditing ? (<ToDoEdit task = {task} key = {task._id} handleEdit = {handleEdit}/>) :
                (<ToDoTask task = {task} key = {task._id} handleDelete = {handleDelete} switchEditMode = {switchEditMode}/>)
            ))}
        </div>
    );
};