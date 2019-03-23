import merge from 'lodash/merge';

import { RECEIVE_POSTING, RECEIVE_POSTINGS, REMOVE_POSTING } from '../actions/posting_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const predefinedState = {};
const postingsReducer = (state = predefinedState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_POSTINGS:
      return merge({}, state, action.postings);
    case RECEIVE_POSTING:
      const newPosting = { [action.posting.id]: action.posting };
      return merge({}, state, newPosting);
    case REMOVE_POSTING:
      newState = merge({}, state);
      delete newState[action.postingId];
      return newState;
    default:
      return state;
  }
};

export default postingsReducer;
