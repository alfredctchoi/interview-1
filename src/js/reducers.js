import {combineReducers} from 'redux'
import app from './app/reducers/app'
import instagram from './instagram/reducers/instagram-reducer'

const reducer = combineReducers({
  app,
  instagram
});

export default reducer;