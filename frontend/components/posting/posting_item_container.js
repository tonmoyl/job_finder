import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostingItem from './posting_item';

const mapStateToProps = (state, ownProps) => {
  const jobId = ownProps.match.params.jobId
  const postings = state.entities.postings
  const postingItem = postings[jobId]

  return {
    goBack: ownProps.history.goBack,
    jobID: ownProps.match.params.job,
    postings: state.entities.postings,
    postingItem: postingItem
  }
}

const mapDispatchToProps = null;

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingItem));
