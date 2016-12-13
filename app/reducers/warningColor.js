
const getColour = ( count ) => {

  // If count goes over 5, start to return a warning color... orange then red. Otherwize white
  const color = () => {
    if (count === 5 || count === 6) return '#ff9800'; // orange (warning color)
    if (count > 6) return '#f44336'; // red (serious warning color)
    return '';
  };

  return {
    count,
    color: color( count ),
  };
};


export const warningColor = (state = { count: 0, color: '' }, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      return getColour( { ...state }.count + 1 );

    case 'REMOVE_ITEM':
      return getColour( { ...state }.count - 1 );

    default:
      return state;
  }
};
