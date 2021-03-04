import React from 'react';
import PropTypes from 'prop-types';
import Remove from '../../../icons/remove';
import s from './dropdown-selected.module.scss';

const DropdownSelected = ({ unselect, selected }) => (
  <div className={s.wrap}>
    {selected?.map((option) => (
      <div key={option} className={s.tag}>
        <span className={s.value}>{option}</span>
        <Remove onClick={() => unselect(option)} />
      </div>
    ))}
  </div>
);

DropdownSelected.propTypes = {
  unselect: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
};

export default DropdownSelected;
