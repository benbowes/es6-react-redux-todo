import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent';
import * as colours from './constants/colours';

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

ReactDOM.render(
  <BaseComponent {...initialState} />,
  document.getElementById('root'),
);
