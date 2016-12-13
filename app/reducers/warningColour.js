import * as colours from '../constants/colours';

export const getColour = ( count ) => {

  // If count goes over 5, start to return a warning color... orange then red. Otherwise white
  const colour = () => {
    if (count === 5 || count === 6) return colours.WARNING_COLOUR; // orange
    if (count > 6) return colours.DANGER_COLOUR; // red
    return colours.DEFAULT_COLOUR; // ''
  };

  return {
    count,
    colour: colour( count ),
  };
};

export const warningColour = (state = { count: 0, colour: colours.DEFAULT_COLOUR }, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      return getColour( { ...state }.count + 1 );

    case 'REMOVE_ITEM':
      return getColour( { ...state }.count - 1 );

    default:
      return state;
  }
};
