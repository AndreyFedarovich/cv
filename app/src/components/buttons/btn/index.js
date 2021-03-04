import React from 'react';
import PropTypes from 'prop-types';
import s from './btn.module.scss';

const Btn = ({ size, children, ...props }) => (
  <button
    {...props}
    className={s[size]}
  >
    <span className={s.text}>{children}</span>
  </button>
);

Btn.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

Btn.defaultProps = {
  children: '',
  size: 's',
};
export default Btn;
