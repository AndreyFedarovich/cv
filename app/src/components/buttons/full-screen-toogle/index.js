import React from 'react';
import PropTypes from 'prop-types';
import exit from '../../../assets/images/exit-full.svg';
import show from '../../../assets/images/show-full.svg';
import s from './full-screen-toogle.module.scss';

const FullScreenToogle = ({ isActive = false, ...props }) => (
  <button
    type="button"
    className={s.wrap}
    {...props}
  >
    {isActive
      ? <img src={exit} alt="" />
      : <img src={show} alt="" />}
  </button>
);

FullScreenToogle.propTypes = {
  isActive: PropTypes.bool,
};

FullScreenToogle.defaultProps = {
  isActive: false,
};

export default FullScreenToogle;
