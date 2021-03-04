import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import InputLabel from '../input-label';
import s from './input.module.scss';

const Input = forwardRef(({
  label, name, error, className, placeholder, onBlur, onFocus, onChange, icon, readOnly, value,
}, ref) => (
  <div className={cn(s.root, className, {
    [s.error]: error,
  })}
  >
    {label && <InputLabel label={label} name={name} />}
    <div className={s.wrap}>
      {icon}
      <input
        id={name}
        name={name}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        className={s.input}
      />
    </div>
    {error && <span className={s.errorMessage}>{error}</span>}
  </div>
));

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  readOnly: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  value: undefined,
  error: '',
  className: '',
  placeholder: '',
  onBlur: null,
  onFocus: null,
  onChange: null,
  readOnly: false,
  icon: null,
};

export default Input;
