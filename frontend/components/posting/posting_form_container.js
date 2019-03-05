import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import PostingForm from './posting_form';
import { createPosting } from '../../actions/posting_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    formType: "Create"
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (posting) => dispatch(createPosting(posting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingForm);
