import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BaseComponent from './BaseComponent';
import todoStore from './store/createStore';

ReactDOM.render(
  <Provider store={todoStore}>
    <BaseComponent />
  </Provider>,
  document.getElementById('root'),
);
