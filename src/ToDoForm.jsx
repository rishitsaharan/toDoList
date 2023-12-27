export const ToDoForm = ({newTask, setNewTask, addTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
        setNewTask("");
    }
    return (
        <div>
            <p className="heading">Get Things Done!</p>
            <form className= "inputForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your task" value = {newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <button type="submit">Add task</button>
            </form>
        </div>
    )
}