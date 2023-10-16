import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it?')) {
            cleanTasks();
        }
    };

    return (
        <div className="compTask">
        <div className="compTaskHead">
            <div >
            <div class="form-check form-switch" > 
            <input className="form-check-input"
                       type="checkbox"
                       checked={isChecked}
                       onChange={(e) => setShowCompleted(e.target.checked)}
                />{" "}
               
                <label> Completed Tasks</label>
                </div>
            </div>

            <button onClick={handleDelete} ><FontAwesomeIcon icon={faTrash} /></button>
        </div>
        </div>
    );
};
