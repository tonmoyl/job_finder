import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchPostings } from '../../actions/posting_actions';
import { fetchSubmits } from '../../actions/submit_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPostings: () => dispatch(fetchPostings()),
  fetchSubmits: () => dispatch(fetchSubmits()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
