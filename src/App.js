import React, { Component } from 'react';
import './App.css';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoHead/>
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
