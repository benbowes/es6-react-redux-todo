import React, { PropTypes } from 'react';

const Label = ({ label }) => <span>{label}</span>;

Label.propTypes = {
  label: PropTypes.string,
};

export default Label;
