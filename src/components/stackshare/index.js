/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import s from './stackshare.module.scss';

const Stackshare = ({ title, stack }) => (
  <>
    <h2 className={s.title}>{title}</h2>
    <div className={s.stack}>
      {stack.map(({ title: stackTitle, image }) => (
        <div className={s.block} key={stackTitle}>
          <img src={image} alt={stackTitle} />
          <span>{stackTitle}</span>
        </div>
      ))}
    </div>
  </>
);

Stackshare.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
};

export default React.memo(Stackshare);
