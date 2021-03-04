import React from 'react';
import PropTypes from 'prop-types';

import s from './stack.module.scss';

const Stack = ({ options }) => (
  <>
    <h2 className={s.title}>Stack</h2>
    <div className={s.stack}>
      {options.map(({ value, image }) => (
        <div className={s.block} key={value}>
          <img loading="lazy" src={image} alt={value} />
          <span>{value}</span>
        </div>
      ))}
    </div>
  </>
);

Stack.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Stack;
