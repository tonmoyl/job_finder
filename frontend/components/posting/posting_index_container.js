import React from 'react';
import { connect } from 'react-redux';
import PostingIndex from './posting_index';
import { fetchPostings } from '../../actions/posting_actions';

const mapStateToProps = ({ entities }) => {
  return {
    componentType: "posting-index",
    postings: entities.postings,
    postingIds: Object.keys(entities.postings)
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