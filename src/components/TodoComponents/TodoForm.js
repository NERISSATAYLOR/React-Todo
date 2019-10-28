import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
            id: Date.now(),
            completed: false
        };
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="todo">New Todo:  </label>
                <input type="text" name="todo" id="todo"
                    value={this.props.newTodo} onChange={this.props.handleChanges} />
                <button>Add Todo</button>
            </form>
        )
    }
}
export default TodoForm;