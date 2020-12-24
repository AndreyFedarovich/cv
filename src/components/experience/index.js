import React, { useContext } from 'react';
import { Context } from '../../context';
import { getPeriod } from '../../helpers/date.helper';

import { title, places } from './data';
import s from './experience.module.scss';

const Experience = () => {
  const { lang } = useContext(Context);

  return (
    <>
      <h2 className={s.title}>{title[lang]}</h2>
      <div className={s.places}>{places.map(({
        title: placeTitle, company, location, start, end,
      }) => (
        <div key={placeTitle.eng} className={s.place}>
          <p>
            {placeTitle[lang]} {lang === 'eng' ? 'at' : '-'} {company}
          </p>
          <p>{location[lang]}</p>
          <p>
            {start.text[lang]} - {end.text[lang]}{' '}
            <span className={s.period}>({getPeriod(start.date, end.date)})</span>
          </p>
        </div>
      ))}
      </div>
    </>
  );
};

export default React.memo(Experience);
