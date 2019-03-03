import React, { Component } from "react";
import { connect } from "react-redux";
// import todos from "../data";

class TodoList extends Component {
  // state = {
  //   todos: todos
  // };

  deleteTodo = id => {
    console.log(id);
  };

  mytodo = this.props.todos.map(todo => (
    <li className="collection-item" key={todo.id}>
      {todo.text}
    </li>
  ));
  render() {
    // console.log(this.state.todos)
    console.log(this.props.todos)
    return (
      <div className="container">
        <ul className="collection">{this.mytodo}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      todos: state
  }
 }; 
export default connect(mapStateToProps)(TodoList);
