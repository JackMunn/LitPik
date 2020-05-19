import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux'; //wraps App components and allows Redux state to be used throughout
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import reducer from './store/reducers/index';
import './index.css';
import { watchAuth, watchMapRender, watchDashboard} from '../src/store/sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer , composeEnhancers(
  applyMiddleware(sagaMiddleware)
));



sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchMapRender);
sagaMiddleware.run(watchDashboard);




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
