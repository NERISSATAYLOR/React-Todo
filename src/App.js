import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {

      items: [],
      todos: [
        {
          task: '',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },

        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }],

    };
  }
  toggleTodo = id => {
    console.log(id);
    this.setState = ({
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
  };


  handleChanges = (event) => {
    this.setState({
      todos: {
        task: event.target.value,
        id: Date.now()
      }
    })
  }
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.todos;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems, todos: {
          task: '', id: Date.now()
        }
      })
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ task: '', todos: [...this.state.todos, this.state.task] });
  };


  clearCompleted = () => {
    this.setState({ entries: this.state.todos.filter(todos => !todos.completed) })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted} />
        </div>
        <Todo todos={this.state.todos} />
        <TodoList items={this.state.items} />
      </div>
    );
  }

}
export default App;


