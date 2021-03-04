import React, { useContext } from 'react';
import { CvPageContext } from '../../../context';
import { title } from './data';
import { stack } from '../../../constatnts/stack.constants';
import s from './stack.module.scss';

const Stack = () => {
  const { lang } = useContext(CvPageContext);
  return (
    <>
      <h2 className={s.title}>{title[lang]}</h2>
      <div className={s.stack}>
        {stack.map(({ value, image }) => (
          <div className={s.block} key={value}>
            <img loading="lazy" src={image} alt={value} />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(Stack);
