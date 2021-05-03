import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux'
import {reducer} from './reducer'
import {defaultState} from './context'
import {Provider} from 'react-redux'
const store=createStore(reducer,defaultState)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


