import {ADD_TODO}  from '../Constants';

const todo = (action) => {
  return{
    id: Math.random(),
    text: action.text
  }
}

const todos = (state = [{
  id: 1,
  text: "My 1st Todos"
},

{
  id: 2,
  text: "My 2nd Todos"
},

], action) => {
  let todos = null;
  switch(action.type) {
    case ADD_TODO:
    todos = [...state, todo(action)];
    console.log('todos as state' , todos)
    return todos;
    default:
    return state;
  }
}

export default todos;