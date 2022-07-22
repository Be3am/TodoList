import React from 'react';
import "./App.css";
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      todos:[
        {
          id: 1,
          title: "Finish Progate",
          completed: false
        },
        {
          id: 2,
          title: "Having lunch",
          completed: false
        },
        {
          id: 3,
          title: "Study react",
          completed: false
        }
      ]
    }
  }

  toggleCompleted = (todoId) => {
    const updatedTodos= this.state.todos.map((todo)=>{
      if (todo.id === todoId){
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  }

  deleteTodo = (todoId) => {
    let newTodos = this.state.todos.filter(todo => todo.id !== todoId)
    this.setState({todos: newTodos})
  }

  addTodo = (todoTitle) => {
    const todos = this.state.todos
    if (todoTitle === '') {
      return
    }

    const newTodo= {
      id: todos.length + 1,
      title: todoTitle,
      completed: false
    }

    const updatedTodos= this.state.todos.concat(newTodo)
    this.setState({todos: updatedTodos})
  }

  render(){
    return(
      <div className="App">

        <div className="App-header">
          <h1>My Todo List</h1>
        </div>

        <TodoForm 
          addTodo={this.addTodo}
        />
      
        <Todos 
        todos={this.state.todos} 
        toggleCompleted={this.toggleCompleted}
        deleteTodo={this.deleteTodo}
        />

      </div>

    )
  }
}

export default App;
