import {connect} from 'react-redux'
import Button from '../components/button'
import { buttonClick } from '../actions/app'

const stateToProps = ({ app }) => {
  return {
    clickCount: app.clickCount
  }
};

const dispatchToProps = (dispatch) => {
  return {
    buttonClick: () => {
      dispatch(buttonClick())
    }
  }
};

export default connect(stateToProps, dispatchToProps)(Button);