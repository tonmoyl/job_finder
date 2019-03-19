import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListItem from './list_item';

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.posting.id,
    role: ownProps.posting.role,
    company: ownProps.posting.company,
    address: ownProps.posting.address,
    logo_url: ownProps.posting.logo_url,
    posting: ownProps.posting
  }
}

const mapDispatchToProps = null;

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem));
