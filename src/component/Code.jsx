import React, {useState} from "react";

const Code = () =>{
const [task,setTask] = useState([])
const [taskInput,setTaskInput] = useState("")

const addtask = ()=>{
  if (taskInput.trim() !== " "){
    setTask([...task,taskInput])
    setTaskInput('')
  }
}

return (
  <>
  <div>
    <input type="text" placeholder="Enter today task" value={taskInput} onChange={(e)=> setTaskInput(e.target.value)} />
    <button onClick={addtask}> Add Task</button>
  </div>
   <ul>
    {task.map((task,index)=>(
      <li key={index}>{task}</li>
    ))}
   </ul>
  
  </>
)
}
export default Code