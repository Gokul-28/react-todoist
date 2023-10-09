import React from "react";
import TodoList from "./TodoList";
import './BlockCard.css';

const BlockCard = () => {
  return (
    <>
      <div className="card">
        <TodoList />
      </div>
    </>
  );
};

export default BlockCard;
