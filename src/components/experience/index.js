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
        <div key={placeTitle[lang]} className={s.place}>
          <p className={s.placeTitle}>
            {placeTitle[lang]} {lang === 'eng' ? 'at' : '-'} {company}
          </p>
          <p className={s.location}>{location[lang]}</p>
          <p className={s.location}>
            {start.text[lang]} - {end.text[lang]} ({getPeriod(start.date, end.date)})
          </p>
        </div>
      ))}
      </div>
    </>
  );
};

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
};

export default React.memo(Experience);
