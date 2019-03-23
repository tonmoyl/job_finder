import * as APIUtil from '../util/submit_api_util';

export const RECEIVE_SUBMITS = "RECEIVE_SUBMITS";
export const CREATE_SUBMIT = "CREATE_SUBMIT";
export const DELETE_SUBMIT = "DELETE_SUBMIT";

export const receiveSubmits = submits => {
  return {
    type: RECEIVE_SUBMITS,
    submits
  }
}

export const receiveSubmit = submit => {
  return {
    type: CREATE_SUBMIT,
    submit
  }
}

export const removeSubmit = submit => {
  return {
    type: DELETE_SUBMIT,
    submit
  }
}

export const fetchSubmits = () => {
  return dispatch => {
    return APIUtil.fetchSubmits().then( (submits) => {
      return dispatch(receiveSubmit(submit));
    })
  }
}

export const createSubmit = (submit) => {
  return dispatch => {
    return APIUtil.createSubmit(submit).then( (submit) => {
      return dispatch(receiveSubmit(submit));
    })
  }
}

export const deleteSubmit = (id) => {
  return dispatch => {
    return APIUtil.deleteSubmit(id).then( () => {
      return dispatch(removeSubmit(id));
    })
  }
}
