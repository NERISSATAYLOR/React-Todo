import React from 'react';
import { Date } from 'core-js';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: '',
            task: "todo",
            id: Date.now(),
            completed: false
        };
    }
    handleChanges = event => {
        this.setState({
            newTodo: event.target.value
        });

    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">New Todo:  </label>
                <input type="text" name="todo" id="todo"
                    value={this.state.newTodo} onChange={this.handleChanges} />
                <button>Add Todo</button>
            </form>
        )
    }
}
export default TodoForm;