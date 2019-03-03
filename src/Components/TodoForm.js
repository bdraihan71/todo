import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo} from '../Store/Actions';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }

    createTodo = (e)=>{
        this.setState({
            text:e.target.value
        });
    }

    addTodos = () =>{
       this.props.addTodo(this.state.text);
    }

  render() {
    return (
      <div className="container">
       <input  type="text" className="validate"  onChange={this.createTodo}/>
        <button className="btn btn-primiry" onClick={this.addTodos}> Add Todo </button>
      </div>
    );
  }
}

export default connect(null, {addTodo})(TodoForm);
