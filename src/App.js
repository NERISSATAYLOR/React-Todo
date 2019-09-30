import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todosData = [
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

];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });

  };
  addTodo = (todo) => {
    const newTodo = {
      task: "",
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />

      </div>
    );
  }
}

export default App;
