import React from 'react';

const Todo = props => {
    return (
        <div className={`todo{props.todo.completed ? 'completed' : ''}`}
            onClick={() => props.toggleCompleted(props.todo.id)}>

            <p>{props.todo.task}</p>

        </div>

    )
}
export default Todo;


{/* <span>{props.todo.id}</span> */ }
{/* <btn className="clear-btn" onClick={props.clearCompleted}>Clear Completed</btn> */ }