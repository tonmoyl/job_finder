import merge from 'lodash/merge';

import { RECEIVE_PERSONAL } from '../actions/personal_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const predefinedState = {
  id: null,
  about_me: '',
  education: '',
  skills: "",
  looking_for: ""
};

const personalsReducer = (state = predefinedState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PERSONAL:
    debugger
      const newPersonal = { [action.personal.id]: action.personal };
      return merge({}, state, newPersonal);
    default:
      return state;
  }
};

export default personalsReducer;
