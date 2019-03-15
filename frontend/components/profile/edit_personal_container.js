import React from 'react';
import { connect } from 'react-redux';
import PersonalInfo from './personal_info';

const mapStateToProps = ({ entities }) => {
  return {
    componentType: "posting-index",
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo);
