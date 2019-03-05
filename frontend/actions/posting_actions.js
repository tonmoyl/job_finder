import * as APIUtil from '../util/posting_api_util';

export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";
export const RECEIVE_POSTING = "RECEIVE_POSTING";
export const RECEIVE_CURRENT_POSTING = "RECEIVE_CURRENT_POSTING";
export const REMOVE_POSTING = "REMOVE_POSTING";
export const RECEIVE_POSTING_ERRORS = "RECEIVE_POSTING_ERRORS";


export const receivePosting = posting => ({
  type: RECEIVE_POSTING,
  posting
});

export const receivePostings = postings => {
  return {
    type: RECEIVE_POSTINGS,
    postings
  };
};

export const removePosting = postingId => {
  return {
    type: REMOVE_POSTING,
    postingId
  }
}

export const receiveErrors = errors => {
  return {
    type: RECEIVE_POSTING_ERRORS,
    errors
  }
}


export const createPosting = posting => dispatch => (
  APIUtil.createPosting(posting).then(posting => (
    dispatch(receivePosting(posting))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updatePosting = (posting) => {
  return dispatch => {
    return APIUtil.updatePosting(posting).then(posting => {
      return dispatch(receivePosting(posting));
    })
  }
}

export const fetchPostings = () => {
  return dispatch => {
    return APIUtil.fetchPostings().then(postings => {
      return dispatch(receivePostings(postings));
    });
  };
};

export const fetchPosting = (id) => {
  return dispatch => {
    return APIUtil.fetchPosting(id).then(posting => {
      return dispatch(receiveCurrentPosting(posting));
    });
  };
};

export const deletePosting = (id) => {
  return dispatch => {
    return APIUtil.deletePosting(id).then(() => {
      return dispatch(removePosting(id));
    });
  };
};
