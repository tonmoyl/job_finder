import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import postingReducer from './posting_reducer';



const entitiesReducer = combineReducers({
  users: userReducer,
  postings: postingReducer
});

export default entitiesReducer;
