/**
* @description items redux reducer
* @param state {Array} - optional, defaults to []
* @param action {Object}
* @param action.type {String} redux action type
* @param action.payload {Array} an array of string
* @returns {Array} a new array */

export const items = (state = [], action) => {
  switch (action.type) {

    // place new item at end of state.items
    case 'ADD_ITEM':
      return [
        ...state,
        action.payload,
      ];

      // remove item from state at given index
    case 'REMOVE_ITEM':
      return [
        ...state.slice( 0, action.payload ),
        ...state.slice( action.payload + 1 ),
      ];

    default:
      return state;
  }
};
