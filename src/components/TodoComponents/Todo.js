import React from 'react';

const Todo = props => {
    return (
        // <div className={`todo${props.todo.completed ? 'completed' : ''}`}
        // onClick={() => this.props.toggleCompleted(this.props.todo.id)}
        <div className="todo">
            <p>{props.todo.task}</p>
            {/* <p>{props.todo.id}</p>
            <p>{props.todo.completed}</p> */}
        </div>
    )
}
export default Todo;