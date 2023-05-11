import { combineReducers } from 'redux';
import todosReducer from './todos';

const rootReducer = combineReducers({
  todos: todosReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});

export default rootReducer;
