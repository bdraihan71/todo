import React, { Component } from "react";
import todos from "../data";

class TodoList extends Component {
  state = {
    todos: todos
  };

  deleteTodo = (id)=>{
       console.log(id)
  }

  mytodos = this.state.todos.map(todo => (
    <ul className="collection" key={todo.id}>
      <li className="collection-item" >
        <div>
          {todo.text}
          <p className="secondary-content" >
            <i className="material-icons " onClick = {()=>this.deleteTodo(todo.id)}>delete</i>
          </p>
        </div>
      </li>
    </ul>
  ));
  render() {
    return <div className="container">{this.mytodos}</div>;
  }
}

export default TodoList;
