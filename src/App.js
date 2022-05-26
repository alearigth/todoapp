import React, {useState} from "react";
import {TaskRow} from "./components/TaskRow";

function App() {

  const [userName, setUserName] = useState("Alejandroski");
  const [taskItems, setTaskItems] = useState([
    {name:"tagega uno", done: false},
    {name:"tagega dos", done: false},
    {name:"tagega tres", done: true},
    {name:"tagega cuatro", done: false}
  ]);

  const toggleTask = task => 
  setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done}: t)))

  const taskTableRows = () => taskItems.map(task => (
    <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
  ))

  return (
    <div>
      <h1>Hello World</h1>
      <table>
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
