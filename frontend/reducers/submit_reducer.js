import merge from 'lodash/merge';

import { RECEIVE_SUBMITS, CREATE_SUBMIT, DELETE_SUBMIT } from '../actions/submit_actions';

const predefinedState = [];

const submitReducer = (state = predefinedState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SUBMITS:
      return merge({}, state, action.submits);
    case CREATE_SUBMIT:
      return newSubmit = { [action.submit.id]: action.submit }
    case DELETE_SUBMIT:
      newState = merge({}, state);
      delete newState[action.submitId];
      return newState;
    default:
      return state;
  }
}

export default submitReducer;
