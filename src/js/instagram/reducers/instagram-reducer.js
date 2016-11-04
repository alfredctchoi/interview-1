import {INSTAGRAM_ACTIONS} from '../actions/instagram-actions'

const INITIAL_STATE = {
  posts: [],
  isLoading: false
};

const instagramReducer = (state = INITIAL_STATE, { type, payload } ) => {
  switch (type) {
    case INSTAGRAM_ACTIONS.LIST_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        posts: []
      });
    case INSTAGRAM_ACTIONS.LIST_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        posts: payload.posts
      });
    default:
      return state;
  }
};

export default instagramReducer;