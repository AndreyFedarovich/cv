import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useBlurMenu from '../use-blur-menu';
import s from './dropdown-search-trigger.module.scss';

const DropdownSearchTrigger = forwardRef(({
  name,
  label,
  onSearch,
  error,
  placeholder,
  isOpen,
  menuRef,
  toggleOpen,
}, ref) => (
  <div className={cn(s.wrap, { [s.error]: error })}>
    {label && <label htmlFor={name} className={s.label}>{label}</label>}
    <div ref={ref} className={cn(s.trigger, { [s.open]: isOpen })}>
      <input
        id={name}
        placeholder={placeholder}
        className={s.input}
        onChange={onSearch}
        onFocus={() => toggleOpen(true)}
        onBlur={() => useBlurMenu({ menuRef, toggleOpen })}
      />
    </div>
    {error && <span className={s.errorMessage}>{error}</span>}
  </div>
));

DropdownSearchTrigger.propTypes = {
  name: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  menuRef: PropTypes.object,
};
DropdownSearchTrigger.defaultProps = {
  onSearch: null,
  label: '',
  error: '',
  placeholder: '',
  menuRef: null,
};

export default DropdownSearchTrigger;
