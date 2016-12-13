import React, { PropTypes } from 'react';

/**
* @description Stateless function component
* @returns {JSX} */

const Label = ({ label }) => <span>{label}</span>;

Label.propTypes = {
  label: PropTypes.string,
};

export default Label;
