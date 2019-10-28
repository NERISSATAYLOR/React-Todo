import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const todoData = [{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }
  addTodo = task => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;

        }

      })
    });
  }
  handleChanges = event => {
    this.setState({
      newTodo: event.target.value
    });

  };
  handleSubmit = event => {
    event.preventDefault();
    this.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });

  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} />
        <button>Clear Completed</button>
      </div>
    );
  }

}
export default App;


