import {ENUMS as APP_ENUMS} from '../actions/app'

const INITIAL_STATE = {
  dataLoading: false,
  data: null
};

const appReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case APP_ENUMS.BUTTON_CLICK_LOADING:
      return Object.assign({}, state, {
        dataLoading: true,
        data: null
      });
    case APP_ENUMS.BUTTON_CLICK_LOADED:
      return Object.assign({}, state, {
        dataLoading: false,
        data: payload.data
      });
    default:
      return state;
  }
};

export default appReducer;