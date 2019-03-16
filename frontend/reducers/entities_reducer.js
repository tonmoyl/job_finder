import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import postingReducer from './posting_reducer';
import personalReducer from './personal_reducer';


const entitiesReducer = combineReducers({
  personal: personalReducer,
  postings: postingReducer,
  users: userReducer
});

export default entitiesReducer;
