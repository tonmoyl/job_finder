import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonalInfo from './personal_form';
import { updatePersonal, fetchPersonal } from '../../actions/personal_actions';

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    goBack: ownProps.history.goBack,
    componentType: "personal-info"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (profile) => dispatch(updatePersonal(profile)),
    fetchPersonal: (personal) => dispatch(fetchPersonal())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo));
