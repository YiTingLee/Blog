import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  posts:PostReducer
});

export default rootReducer;
