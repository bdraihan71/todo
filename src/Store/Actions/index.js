import {ADD_TODO} from '../Constants';

export const addTodo = (text) => {
    const action = {
        type : ADD_TODO,
        text: text
    }
    console.log ('action in addTodo', action);
    return action;
}