import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux'; //wraps App components and allows Redux state to be used throughout
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider} from 'styled-components';

import App from './App';
import reducer from './store/reducers/index';
import { watchAuth, watchMapRender, watchDashboard} from '../src/store/sagas/index';
import {GlobalStyles} from './theme/GlobalStyles';
import { theme } from './theme/Theme';

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
        <ThemeProvider theme={theme}>
         <GlobalStyles/>
          <App />
        </ThemeProvider>
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
