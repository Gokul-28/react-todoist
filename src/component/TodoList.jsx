import React, { useState } from "react";
import { Button, ListGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const updatedTasks = [...tasks];
    const editedText = prompt("Edit task:", updatedTasks[index].text);
    if (editedText !== null) {
      updatedTasks[index].text = editedText;
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <h2 className="text-center">To-Do List using React and Bootstrap</h2>
      <Form>
        <Form.Group controlId="taskInput">
          <Form.Control
            type="text"
            placeholder="Add a new task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </Form.Group>
        <Button variant="danger" onClick={addTask}>
          Add Task
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            className={task.completed ? "completed-task" : ""}
          >
            {task.text}
            <div className="float-right">
              <Button
                variant="success"
                onClick={() => completeTask(index)}
                className="mr-2"
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button
                variant="warning"
                onClick={() => editTask(index)}
                className="mr-2"
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteTask(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {tasks.length > 0 && (
        <Button
          variant="danger"
          className="mt-3"
          onClick={clearAllTasks}
        >
          Clear All Tasks
        </Button>
      )}
    </div>
  );
};

export default TodoList;
