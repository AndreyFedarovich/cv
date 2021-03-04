import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useBlurMenu from '../use-blur-menu';
import s from './dropdown-search-trigger.module.scss';

const DropdownSearchTrigger = forwardRef(({
  name,
  label,
  error,
  placeholder,
  isOpen,
  menuRef,
  toggleOpen,
  selected,
}, ref) => (
  <div className={cn(s.wrap, { [s.error]: error })}>
    {label && <label htmlFor={name} className={s.label}>{label}</label>}
    <div ref={ref} className={cn(s.trigger, { [s.open]: isOpen })}>
      <input
        id={name}
        placeholder={placeholder}
        className={s.input}
        onFocus={() => toggleOpen(true)}
        onBlur={() => useBlurMenu({ menuRef, toggleOpen })}
        readOnly
        value={selected}
      />
    </div>
    {error && <span className={s.errorMessage}>{error}</span>}
  </div>
));

DropdownSearchTrigger.propTypes = {
  name: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  menuRef: PropTypes.object,
  selected: PropTypes.string,
};
DropdownSearchTrigger.defaultProps = {
  label: '',
  error: '',
  placeholder: '',
  menuRef: null,
  selected: '',
};

export default DropdownSearchTrigger;
