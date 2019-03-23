import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import postingReducer from './posting_reducer';
import personalReducer from './personal_reducer';
import submitReducer from './submit_reducer';


const entitiesReducer = combineReducers({
  personal: personalReducer,
  postings: postingReducer,
  submits: submitReducer,
  users: userReducer
});

export default entitiesReducer;
