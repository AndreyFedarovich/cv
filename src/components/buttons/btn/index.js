import React from 'react';
import PropTypes from 'prop-types';
import s from './btn.module.scss';

const Btn = ({ text, ...props }) => (
  <button {...props} className={s.wrap}>
    <span className={s.text}>{text}</span>
  </button>
);

Btn.propTypes = {
  text: PropTypes.string,
};

Btn.defaultProps = {
  text: '',
};
export default Btn;
