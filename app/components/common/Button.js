import React, { PropTypes } from 'react';

/**
* @description Stateless function component. Styles prefixed with `sg-` are coming in from a global stylesheet
* @returns {JSX} */

const Button = ({ buttonTitle, type, classes, clickHandler, label }) => (
  <button
    title={buttonTitle || ''}
    type={type || 'button'}
    className={classes || 'sg-button'}
    onClick={clickHandler}
  >
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  clickHandler: PropTypes.func,
  label: PropTypes.string,
  buttonTitle: PropTypes.string,
};

export default Button;
