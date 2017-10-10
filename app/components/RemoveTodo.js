import React, { PropTypes } from 'react';
import Button from './common/Button';

/**
* @description triggers a `redux dispatch` call that updates the redux store
* @param dispatch {function} a redux `store.dispatch` reference
* @param index {number} injected as a prop via BaseComponent's render method  */

const RemoveTodo = ({ buttonTitle, index, dispatch }) => {
  return (
    <Button
      buttonTitle={buttonTitle}
      label="&#10005;"
      clickHandler={() => dispatch({ type: 'REMOVE_ITEM', payload: index })}
    />
  );
};

RemoveTodo.propTypes = {
  buttonTitle: PropTypes.string,
  dispatch: PropTypes.func,
  index: PropTypes.number,
};

export default RemoveTodo;
