import React from 'react';
// import PropTypes from 'prop-types';
import s from './remove.module.scss';

const Remove = ({ ...props }) => (
  <button {...props} className={s.wrap}>
    <span />
    <span />
  </button>
);

Remove.propTypes = {};

export default Remove;
