import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import onBlurMenu from '../../helpers/blur-menu.helper';
import DropdownCheckbox from '../dropdown-checkbox';
import s from './dropdown-option.module.scss';

const DropdownOption = forwardRef(
  (
    {
      index,
      menuRef,
      isMultiple,
      onSelect,
      option,
      options,
      toggleOpen,
      isActive,
    },
    ref,
  ) => (
    <button
      ref={ref}
      type="button"
      className={cn(s.option, {
        [s.active]: isActive,
      })}
      onClick={() => {
        onSelect(option);
        if (!isMultiple) toggleOpen(false);
      }}
      onBlur={(e) => (index === options.length - 1
        ? onBlurMenu({
          e,
          menuRef,
          toggleOpen,
        })
        : null)}
    >
      {isMultiple && <DropdownCheckbox isActive={isActive} />}
      {option}
    </button>
  ),
);

DropdownOption.propTypes = {
  index: PropTypes.number.isRequired,
  isMultiple: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  menuRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

DropdownOption.defaultProps = {
  isMultiple: false,
};

export default DropdownOption;
