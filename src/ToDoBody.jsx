import { useEffect } from "react";
import { ToDoTask } from "./ToDoTask";
import { ToDoEdit } from "./ToDoEdit";

export const ToDoBody = ({tasks, setTasks}) => {
    function switchEditMode(id) {
        setTasks(tasks.map((task) => task.id === id ? {...task, isEditing : !task.isEditing} : task));
    }
    function handleEdit(content, id) {
        setTasks(tasks.map((task) => task.id === id ? {...task, task : content, isEditing : !task.isEditing } : task));
    }
    function handleDelete(deleteid) {
        setTasks(tasks.filter((task) => task.id != deleteid));
    }

    return (
        tasks.map((task, index) => (
            task.isEditing ? (<ToDoEdit task = {task} key = {index} handleEdit = {handleEdit}/>)
            : (<ToDoTask task = {task} key = {index} handleDelete = {handleDelete} switchEditMode = {switchEditMode}/>)
        ))
    );
};