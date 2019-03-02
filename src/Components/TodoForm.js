import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <div className="container">
       <input  type="text" className="validate" />
        <button className="btn btn-primiry "> Add Todo </button>
      </div>
    );
  }
}

export default TodoForm;
