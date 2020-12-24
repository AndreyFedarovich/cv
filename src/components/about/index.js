import React, { useContext } from 'react';
import { Context } from '../../context';
import { title, list } from './data';
import s from './about.module.scss';

const About = () => {
  const { lang } = useContext(Context);
  return (
    <>
      <h2 className={s.title}>{title[lang]}</h2>
      <ul className={s.list}>
        {list.map((item) => (
          <li className={s.text} key={item.eng}>{item[lang]}</li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(About);
