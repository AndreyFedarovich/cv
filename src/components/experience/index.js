/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import s from './experience.module.scss';

const Experience = ({ title, places }) => (
  <>
    <h2 className={s.title}>{title}</h2>
    <div>{places.map(({
      title: placeTitle, company, location, start, end,
    }) => (
      <div className={s.palce}>
        <p className={s.placeTitle}>{placeTitle} at {company}</p>
        <p className={s.location}>{location}</p>
        <p className={s.location}>
          <span>{start}</span> - {end}
        </p>
      </div>
    ))}
    </div>
  </>
);

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
};

export default React.memo(Experience);
