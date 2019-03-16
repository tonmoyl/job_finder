import * as APIUtil from '../util/personal_api_util';

export const RECEIVE_PERSONAL = "RECEIVE_PERSONAL";

export const receivePersonal = personal => ({
  type: RECEIVE_PERSONAL,
  personal
});

export const updatePersonal = (personal) => {
  return dispatch => {
    return APIUtil.updatePersonal(personal).then(personal => {
      return dispatch(receivePersonal(personal));
    })
  }
}

export const fetchPersonal = (id) => {
  return dispatch => {
    return APIUtil.fetchPersonal(id).then(personal => {
      return dispatch(receivePersonal(personal));
    });
  };
};
