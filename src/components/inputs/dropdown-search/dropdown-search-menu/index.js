import React from 'react';
import PropTypes from 'prop-types';
import s from './dropdown-search-menu.module.scss';

const DropdownSearchMenu = ({ options }) => (
  <div className={s.wrap}>
    {options.map(({ id, value }) => (
      <div key={id}>
        {value}
      </div>
    ))}
  </div>
);

DropdownSearchMenu.propTypes = {
  options: PropTypes.array.isRequired,
};

export default DropdownSearchMenu;
