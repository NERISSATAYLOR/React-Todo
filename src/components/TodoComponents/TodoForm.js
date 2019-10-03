import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addItem}>
                <input
                    placeholder="Enter task"
                    type="text"
                    name="todo"
                    value={props.task}
                    onChange={props.handleChanges}
                />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}


export default TodoForm;