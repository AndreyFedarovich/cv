import React from 'react';
import { FLAG_UA } from '../../constatnts/ui.constants';

export const name = {
  eng: 'Andrey Fedorovich',
  ua: 'Андрій Федорович',
};

export const position = {
  eng: 'Front-end developer',
  ua: 'Front-end розробник',
};

export const location = {
  eng: 'Kyiv, Ukraine',
  ua: 'Київ, Україна',
  flag: (
    <span role="img" aria-label={FLAG_UA}>
      🇺🇦
    </span>
  ),
};
