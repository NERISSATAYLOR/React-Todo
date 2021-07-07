import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            todos: [
                {
                    task: 'Organize Garage',
                    id: 1528817077286,
                    completed: false
                },
                {
                    task: 'Bake Cookies',
                    id: 1528817084358,
                    completed: false

                }
            ],

        };
    }

    upInput = e => {
        this.setState({
            input: e.target.value
        });
    };

    addTodo = e => {
        e.preventDefault();

        const id = Date.now();



        const todo = {
            task: this.state.input,
            completed: false,
            id: id
        };
        const todos = [...this.state.todos, todo];
        this.setState({
            todos: todos,
            input: ""
        });
    };

    toggleDone = id => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        });
        this.setState({ todos: updatedTodos });
    };

    cleanCompleted = e => {
        e.preventDefault();
        const notFinishedTodos = this.state.todos.map(todo => {
            if (todo.completed === false) return todo;
        });
        this.setState({
            todos: notFinishedTodos
        });
    };

    render() {
        const { input, todos } = this.state;

        return (
            <div className="App">
                <div
                    style={{
                        marginBottom: "100px",
                        border: "solid black 1px",
                        padding: "10%"
                    }}
                >
                    <h1>TodoList</h1>
                    <input value={input} onChange={this.upInput} />
                    <button onClick={this.addTodo}>Add Todo</button>
                    <button onClick={this.cleanCompleted}>Clear Done</button>

                    <ul>
                        {todos.map((todo, i) => {
                            return (
                                <Todo toggle={this.toggleDone} todo={todo} key={todo.id} />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;
