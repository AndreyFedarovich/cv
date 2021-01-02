import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import cn from 'classnames';

import s from './date-input.module.scss';

const DateInput = ({
  placeholder,
  error,
  label,
  name,
  ...props
}) => (
  <div className={cn(s.wrap, { [s.error]: error })}>
    {label && <label htmlFor={name} className={s.label}>{label}</label>}
    <DatePicker
      id={name}
      className={s.input}
      placeholderText={placeholder}
      {...props}
    />
    {error && <span className={s.errorMessage}>{error}</span>}
  </div>
);

DateInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
};

DateInput.defaultProps = {
  placeholder: '',
  label: '',
  name: '',
  error: '',
};
export default DateInput;
