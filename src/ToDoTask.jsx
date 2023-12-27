import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ToDoTask = ({task, handleDelete, switchEditMode}) => {
    return (
        <div className="task">
            <p>{task.task}</p>
            <div className="editAndDelete">
                <FontAwesomeIcon onClick={() => switchEditMode(task.id)} icon={faPenToSquare}/>
                <FontAwesomeIcon onClick={() => handleDelete(task.id)} icon={faTrash} />
            </div>
        </div>
    );
};