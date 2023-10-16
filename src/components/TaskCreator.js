import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export  function TaskCreator( props ) {
  const [newTaskName, setNewTaskName] = useState();

  function handleSubmit(event){
    props.createTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
    event.preventDefault();
  };
  function handleChange(event)
  {
    setNewTaskName(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
          <input
              type="text"
              value={newTaskName}
              placeholder="Enter a new task"
              onChange={handleChange}
              className='form-control'
          />
      </div>
      <button className="Add">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};
