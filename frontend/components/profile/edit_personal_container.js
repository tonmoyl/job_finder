import React from 'react';
import { connect } from 'react-redux';
import PersonalInfo from './personal_form';
import { updatePersonal, fetchPersonal } from '../../actions/personal_actions';

const mapStateToProps = ({ entities }) => {
  return {
    componentType: "personal-info"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (profile) => dispatch(updatePersonal(profile)),
    fetchPersonal: (personal) => dispatch(fetchPersonal(personal))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo);
