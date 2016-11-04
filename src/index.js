import {createStore, applyMiddleware} from 'redux'
import App from './js/app/components/index'
import React from 'react'
import ReactDOM from  'react-dom'
import reducer from './js/reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

//store
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);