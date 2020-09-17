import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import { getPeriod } from '../../helpers/date.helper';
import s from './experience.module.scss';

const Experience = ({ title, places }) => {
  const { lang } = useContext(Context);

  return (
    <>
      <h2 className={s.title}>{title[lang]}</h2>
      <div>{places.map(({
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

Experience.propTypes = {
  title: PropTypes.object.isRequired,
  places: PropTypes.array.isRequired,
};

export default React.memo(Experience);
