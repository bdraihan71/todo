import { createStore } from 'redux';
import todos from '../Store/Reducers/rootReducer';

const store = createStore(todos)

export default store;
   