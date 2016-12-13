/**
* @description counter redux reducer
* @param state {Number} - optional, defaults to 0
* @param action {Object}
* @param action.type {String} redux action type
* @param action.payload {Number}
* @returns {Number} */

export const counter = (state = 0, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      return state + 1;

    case 'REMOVE_ITEM':
      return state - 1;

    default:
      return state;
  }
};
