import fetch from 'isomorphic-fetch';

// Enums
export const ENUMS = {
  BUTTON_CLICK_LOADING: 'BUTTON_CLICK_LOADING',
  BUTTON_CLICK_LOADED: 'BUTTON_CLICK_LOADED',
  BUTTON_CLICK: 'BUTTON_CLICK'
};

// Private Functions
const buttonLoadingAction = () => {
  return {
    type: ENUMS.BUTTON_CLICK_LOADING
  }
};

const buttonLoadedAction = (data) => {
  return {
    type: ENUMS.BUTTON_CLICK_LOADED,
    payload: {
      data
    }
  }
};

// Export Functions
export const buttonClick = () => {
  return dispatch => {
    dispatch(buttonLoadingAction());
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(json => dispatch(buttonLoadedAction(json)));
  };
};
