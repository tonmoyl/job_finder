import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListItem from './list_item';

const mapStateToProps = (state, ownProps) => {
  var date = ownProps.posting.updated_at
  var dateParsed = date.slice(5,10) + "-" + date.slice(0,4);
  return {
    id: ownProps.posting.id,
    role: ownProps.posting.role,
    company: ownProps.posting.company,
    address: ownProps.posting.address,
    logo_url: ownProps.posting.logo_url,
    posting: ownProps.posting,
    date: dateParsed
  }
}

const mapDispatchToProps = null;

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem));
