import React from 'react';
import { connect } from 'react-redux';
import PostingIndex from './posting_index';
import { fetchPostings } from '../../actions/posting_actions';

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    componentType: "recent",
    postings: entities.postings,
    postingIds: ownProps.viewIds
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
