import merge from 'lodash/merge';

import { RECEIVE_SUBMITS, CREATE_SUBMIT, DELETE_SUBMIT } from '../actions/submit_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const predefinedState = {};

const submitReducer = (state = predefinedState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case LOGOUT_CURRENT_USER:
      newState = merge({}, predefinedState);
      return newState;
    case RECEIVE_SUBMITS:
      newState = merge({}, state);
      var allKeys = Object.keys(action.submits);
      for (var i = 0; i < allKeys.length; i++) {
        var key = allKeys[i]
        newState[key] = true;
      }
      return newState;
    case CREATE_SUBMIT:
      var newKey = {[action.submit.posting_id]: true}
      return merge({}, state, newKey);
    case DELETE_SUBMIT:
      newState = merge({}, state);
      newState[action.submit] = false;
      return newState;
    default:
      return state;
  }
}

export default submitReducer;
