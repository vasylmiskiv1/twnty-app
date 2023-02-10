import { combineReducers } from "redux";
import postsReducer from './solarsReducer';

const reducers = combineReducers({
  posts: postsReducer
})

export default reducers;