import React from 'react';
import PropTypes from 'prop-types';
import s from './input-label.module.scss';

const InputLabel = ({ name, label }) => (
  <label htmlFor={name} className={s.root}>{label}</label>
);

InputLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputLabel;
