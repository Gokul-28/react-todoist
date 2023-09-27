import React,{useState} from 'react'

const SimpleTodo = () => {
    const [tasks,setTask] = useState([]);
    const [taskInput,setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim() !== ''){
            setTask([...tasks,taskInput])
            setTaskInput('');
        }
    }
  return (
    <>
    <h2> Todoist </h2>
    <div>
    <input type='text' placeholder='Enter the task' value={taskInput} onChange={(e)=>setTaskInput(e.target.value)} />

    
    <button className="btn btn-primary" onClick={addTask}>Add</button>
    </div>
    <ul>
    {tasks.map((task,index)=>(
        <li key={index}>{task}</li>
    ))}
    </ul>
    </>
  )
}

export default SimpleTodo