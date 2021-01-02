import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import s from './dropdown-search-selected.module.scss';
import Remove from '../../../icons/remove';

const DropdownSearchSelected = ({ name }) => {
  const { getValues, setValue } = useFormContext();
  const options = getValues(name) || [];
  const selectedOptions = options.map(({ value, isActive }, idx) => {
    if (isActive) return { key: idx, value };
    return null;
  }).filter(Boolean);

  const close = (key) => {
    options[key].isActive = false;
    setValue(name, options);
  };

  return (
    <div className={s.wrap}>
      {selectedOptions?.map(({ value, key }) => (
        <div key={key} className={s.tag}>
          <span className={s.value}>{value}</span>
          <Remove onClick={() => close(key)} />
        </div>
      ))}
    </div>
  );
};

DropdownSearchSelected.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DropdownSearchSelected;
