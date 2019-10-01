import React from 'react';


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
        this.props.addTodo(this.state.todo);
    }

    clearCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.completed)
        });
    };


    render() {
        return (
            <div>
                <form onSubmit={this.submitTodo}>
                    <input
                        type="text"
                        name="task"
                        value={this.task}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="number"
                        name="id"
                        value={this.id}
                        onChange={this.handleInputChange}

                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;