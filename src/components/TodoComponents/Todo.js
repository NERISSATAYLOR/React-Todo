import React from 'react';
import TodoList from './TodoList';

const Todo = props => {
    return (
        <div className="todo">
            <p>{props.todo.task}</p>
            <p>{props.todo.id}</p>
            <p>{props.todo.completed}</p>
        </div>

    )

}
export default Todo;