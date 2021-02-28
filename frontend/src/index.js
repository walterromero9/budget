import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer  from './redux/reducers/rootReducers';

const miStore = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={miStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

