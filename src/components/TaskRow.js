export const TaskRow = ({ task, toggleTask }) => {
  return (
      <div className="tasklist">
      <div className="grid_space">
        {task.name} 
      </div>
      <div>{task.date}</div>
      <div>
        <input
        className="form-check-input" 
          type="checkbox"
          checked={task.done}
          onChange={() => {
            const cDate=new Date().toLocaleTimeString();
            task.date=cDate;
            toggleTask(task);
          }} />
      </div>
    </div>

  );
};
