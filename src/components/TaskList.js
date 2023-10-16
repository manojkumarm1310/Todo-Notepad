import { TaskRow } from "./TaskRow";

export const TaskList = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} date={tasks.date} Time={tasks.Time}/>
      ));
  };
  return (
    <div className="task">
        <div >
          <div className="TaskHeading">Tasks</div>
        </div>

      <div className="taskContainer">
      <div className="Table">
          <p>List</p>
          <p>Time</p>
          <p>Finish</p>
        </div>

      {taskTableRows(showCompleted)}</div>
    </div>
  );
};
