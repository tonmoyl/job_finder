import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    postings: state.entities.postings,
    postingIds: Object.keys(state.entities.postings)
  }
}

const mapDispatchToProps = dispatch => {
  return{
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
