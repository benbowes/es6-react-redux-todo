import { createStore, compose, combineReducers } from 'redux';
import { counter, items, warningColor } from '../reducers';

// Get all reducers... currently only one
const reducers = combineReducers({ counter, items, warningColor });

// Set initial state
const initialState = {
  counter: 3,
  items: [
    'Go to the park',
    'Eat some cheese',
    'Host a party',
  ],
  warningColor: {
    count: 3,
    color: '',
  },
};

const createdStore = createStore(
  reducers,
  initialState,
  compose( window.devToolsExtension ? window.devToolsExtension() : f => f ),
);

export default createdStore;
