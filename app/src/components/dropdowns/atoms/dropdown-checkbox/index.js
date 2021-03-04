import React from 'react';
import PropTypes from 'prop-types';
import s from './dropdown-checkbox.module.scss';

const DropdownCheckbox = ({ isActive }) => (
  <span className={s.wrap}>
    {isActive ? '-' : '+'}
  </span>
);

DropdownCheckbox.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default DropdownCheckbox;
