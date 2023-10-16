import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { useState, useEffect } from "react";
import { TaskList } from "./components/TaskList";
import { VisibilityControl } from "./components/VisibilityControl";
import { CompletedTaskList } from "./components/CompletedTaskList";
import ChangeNotepad from "./ChangeNotepad";

function Todo() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      const date=new Date().toLocaleTimeString();
      const Time=new Date().getFullYear();
      setTaskItems([...tasksItems, { name: taskName, done: false, date ,Time}]);
      console.log(tasksItems)
    } else {
      alert("The task already exist");
    }
  }

  function toggleTask(task){
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  function cleanTasks(){
    setTaskItems(tasksItems.filter(task => !task.done));   
    setShowCompleted(false);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);
  

  return (
    <main >

        <div className="Container">
            <div className="bg1">
                <h1>TODO LIST</h1>
                <div className="taskCreator">
                <TaskCreator createTask={createTask} />
                </div>
            </div>
            <div className="bg2">
              <div className="TaskListHead">

              <TaskList tasks={tasksItems} toggleTask={toggleTask} />
          
              <VisibilityControl
              setShowCompleted={(checked) => setShowCompleted(checked)}
              cleanTasks={cleanTasks}
              isChecked={showCompleted}
              />

              {showCompleted === true && (
              <CompletedTaskList
                tasks={tasksItems}
                toggleTask={toggleTask}
                showCompleted={showCompleted}
              />
              )}
              </div>
            </div>
        </div>
    </main>
  );
}

export default Todo;
