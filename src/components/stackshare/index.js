import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import s from './stackshare.module.scss';

const Stackshare = ({ title, stack }) => {
  const { lang } = useContext(Context);
  return (
    <>
      <h2 className={s.title}>{title[lang]}</h2>
      <div className={s.stack}>
        {stack.map(({ title: stackTitle, image }) => (
          <div className={s.block} key={stackTitle}>
            <img loading="lazy" src={image} alt={stackTitle} />
            <span>{stackTitle}</span>
          </div>
        ))}
      </div>
    </>
  );
};

Stackshare.propTypes = {
  title: PropTypes.object.isRequired,
  stack: PropTypes.array.isRequired,
};

export default React.memo(Stackshare);
