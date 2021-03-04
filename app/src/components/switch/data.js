import React from 'react';
import darkIcon from '../../assets/images/moon.svg';
import lightIcon from '../../assets/images/sun.svg';

export const options = [{
  title: 'light',
  element: <img src={lightIcon} alt="" />,
}, {
  title: 'dark',
  element: <img src={darkIcon} alt="" />,
}];
