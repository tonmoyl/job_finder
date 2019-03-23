import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostingItem from './posting_item';
import { createSubmit, deleteSubmit } from '../../actions/submit_actions';

const mapStateToProps = (state, ownProps) => {
  const jobId = ownProps.match.params.jobId;
  const postings = state.entities.postings;
  const postingItem = postings[jobId];
  
  var applied = false;
  
  if (state.entities.submits[ownProps.match.params.jobId]){
    applied = true;
  }

  return {
    applied: applied,
    goBack: ownProps.history.goBack,
    jobID: ownProps.match.params.job,
    postings: state.entities.postings,
    postingItem: postingItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSubmit: (id) => dispatch(createSubmit(id)),
    deleteSubmit: (id) => dispatch(deleteSubmit(id))
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingItem));
