import { ENUMS as APP_ENUMS } from '../actions/app'

const INITIAL_STATE = {
  clickCount: 0
};

const appReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type){
    case APP_ENUMS.BUTTON_CLICK:
      return Object.assign({}, state, {
        clickCount: state.clickCount + 1
      });
    default:
      return state;
  }
};

export default appReducer;