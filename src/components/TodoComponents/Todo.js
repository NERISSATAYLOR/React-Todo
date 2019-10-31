import React from "react";

const Todo = ({ toggle, todo }) => {
    return (
        <li
            onClick={() => toggle(todo.id)}
            style={
                todo.completed ? { color: "red", textDecoration: "line-through" } : null
            }
        >
            {todo.task}
        </li>
    );
};

export default Todo;
