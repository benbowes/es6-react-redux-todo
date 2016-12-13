import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BaseComponent from './BaseComponent';
import createdStore from './store/createStore';

ReactDOM.render(
  <Provider store={createdStore}>
    <BaseComponent />
  </Provider>,
  document.getElementById('root'),
);
