import React from 'react';



const Todo = (props) => {
    const todos = props.todos;
    const listTodos = todos && todos.map(todo => {
        return <div className="list-todos" key="todos.id">
            <h2>{todo.task}</h2>
            <h2>{todo.id}</h2>
            <h2>{todo.completed}</h2>
            <button>Clear Completed</button>

        </div>

    })
    return (
        <div>{listTodos}</div>
    )
}
export default Todo;