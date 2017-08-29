import { combineReducers } from 'redux';
import CategoryReducer from './reducer_categories';
import JokeReducer from './reducer_joke';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  joke: JokeReducer
});

export default rootReducer;
