import React from 'react';
import { connect } from 'react-redux';
import PostingIndex from './posting_index';
import { fetchPostings } from '../../actions/posting_actions';

const mapStateToProps = (state, ownProps) => {
  
  return {
    componentType: "recent",
    postings: state.entities.postings,
    postingIds: ownProps.viewIds,
    currentId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostings: () => dispatch(fetchPostings()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingIndex);
