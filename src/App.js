import React, {useState} from "react";
import {TaskRow} from "./components/TaskRow";
import {TaskBanner} from "./components/TaskBanner";
import {TaskCreator} from "./components/TaskCreator";

function App() {

  const [userName, setUserName] = useState("Alejandroski");
  const [taskItems, setTaskItems] = useState([
    {name:"tagega uno", done: false},
    {name:"tagega dos", done: false},
    {name:"tagega tres", done: true},
    {name:"tagega cuatro", done: false}
  ]);

  const createNewTask = taskName => {
    if(!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, {name:taskName, done:false}])
    }
  }

  const toggleTask = task => 
  setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done}: t)))

  const taskTableRows = () => taskItems.map(task => (
    <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
  ))

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems}/>
      <TaskCreator callback={createNewTask}/>
      <table className="table table-striped table-border">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
