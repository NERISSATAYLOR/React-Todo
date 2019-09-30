import React from 'react';
import App from '../../App'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: "",
            id: Date.now(),
            completed: false


        };
    }
    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
    }
    clearCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(todos => !todo.completed)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitTodo}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.addTodo}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;