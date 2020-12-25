import React, { useContext } from 'react';
import { Context } from '../../context';

import { title, list } from './data';
import s from './education.module.scss';

const Education = () => {
  const { lang } = useContext(Context);

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>{title[lang]}</h2>
      <div>{list.map(({
        title: listTitle, description, field, start, end,
      }) => (
        <div className={s.text} key={listTitle.eng}>
          <p>{listTitle[lang]}</p>
          <p>{description[lang]}</p>
          <p>{field[lang]} <span className={s.period}>({start} - {end})</span></p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default React.memo(Education);
