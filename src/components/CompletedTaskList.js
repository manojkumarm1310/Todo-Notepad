import { TaskRow } from "./TaskRow";

export const CompletedTaskList = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} date={tasks.date} Time={tasks.Time}/>
      ));
  };
  return (
    <div className="completed_section" >

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
