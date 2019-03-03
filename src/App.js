import React, { Component } from 'react';
import './App.css';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import { Provider } from "react-redux";
import store from './Store'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        <TodoHead/>
        <TodoForm/>
        <TodoList/>
      </div>
      </Provider>
    );
  }
}

export default App;
