import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ToDoTask = ({task, handleDelete, switchEditMode}) => {
    // console.log(task);
    return (
        <div className="task">
            <p>{task.task}</p>
            <div className="editAndDelete">
                <FontAwesomeIcon onClick={() => switchEditMode(task._id)} icon={faPenToSquare}/>
                <FontAwesomeIcon onClick={() => handleDelete(task._id)} icon={faTrash} />
            </div>
        </div>
    );
};