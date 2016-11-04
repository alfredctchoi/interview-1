import {connect} from 'react-redux'
import InstagramList from '../components/instagram-list'
import { loadUserRecent } from '../actions/instagram-actions'

const mapStateToProps = (state) => {
  const { instagram } = state;
  return {
    posts: instagram.posts,
    isLoading: instagram.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRecent: () => {
      dispatch(loadUserRecent())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstagramList);