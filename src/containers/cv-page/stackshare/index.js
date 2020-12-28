import React, { useContext } from 'react';
import { CvPageContext } from '../../../context';
import { title, stack } from './stackshare';
import s from './stackshare.module.scss';

const Stackshare = () => {
  const { lang } = useContext(CvPageContext);
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

export default React.memo(Stackshare);
