import { createStore, compose, combineReducers } from 'redux';
import { counter, items, warningColour } from '../reducers';
import * as colours from '../constants/colours';

// Get all reducers... currently only one
const reducers = combineReducers({ counter, items, warningColour });

// Set initial state
const initialState = {
  counter: 3,
  items: [
    'Go to the park',
    'Eat some cheese',
    'Host a party',
  ],
  warningColour: {
    count: 3,
    colour: colours.DEFAULT_COLOUR,
  },
};

const createdStore = createStore(
  reducers,
  initialState,
  compose( window.devToolsExtension ? window.devToolsExtension() : f => f ),
);

export default createdStore;
