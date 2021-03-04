import React from 'react';
import PropTypes from 'prop-types';
import s from './dropdown-checkbox.module.scss';

const DropdownCheckbox = ({ isActive }) => (
  <div className={s.wrap}>
    {isActive ? '-' : '+'}
  </div>
);

DropdownCheckbox.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default DropdownCheckbox;
