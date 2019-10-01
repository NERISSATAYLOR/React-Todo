import React from 'react';
import TodoList from "./TodoList";

const Todo = props => {

    return (
        <div>
            <p>Task:{props.task}</p>
            <p>id:{props.id}</p>
            <p>completed:{props.completed}</p>
        </div>

    )

}
export default Todo;