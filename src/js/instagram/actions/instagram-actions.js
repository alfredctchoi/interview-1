const INSTAGRAM_API = 'http://localhost:3000';

export const INSTAGRAM_ACTIONS = {
  LIST_LOADING: 'LIST_LOADING',
  LIST_LOADED: 'LIST_LOADED'
};

const setListLoading = () => {
  return {
    type: INSTAGRAM_ACTIONS.LIST_LOADING
  }
};

const listLoadingComplete = (json) => {
  return {
    type: INSTAGRAM_ACTIONS.LIST_LOADED,
    payload: {
      posts: json.data
    }
  }
};

export const loadUserRecent = ({ userId = '634908551' } = {}) => {
  return (dispatch) => {
    dispatch(setListLoading());
    fetch(`${INSTAGRAM_API}/users/${userId}/recent`)
      .then(res => res.json())
      .then(json => dispatch(listLoadingComplete(json)));
  }
};