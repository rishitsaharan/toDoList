import { useState } from "react";

export const ToDoEdit = ({task, handleEdit}) => {
    const [updateTask, setUpdateTask] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();  
        handleEdit(updateTask, task.id);
        setUpdateTask("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Edit your task" value = {updateTask} onChange={(e) => setUpdateTask(e.target.value)}/>
            <button type="submit">Save task</button>
        </form>
    )
}