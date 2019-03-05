import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import PostingForm from './posting_form';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingForm);
