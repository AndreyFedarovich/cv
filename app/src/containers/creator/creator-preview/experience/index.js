import React from 'react';
import PropTypes from 'prop-types';

import {
  getPeriod, getStart, getEnd, getStartDate, getEndDate,
} from '../../../../helpers/date.helper';
import s from './experience.module.scss';

const Experience = ({ roles }) => (
  <>
    <h2 className={s.title}>Work experience</h2>
    <div className={s.places}>{roles?.map(({
      id,
      position,
      location,
      company,
      startMonth,
      startYear,
      endMonth,
      endYear,
      isCurrent,
    }, idx) => (
      // TODO: Use an id instead of idx
      <div key={idx} className={s.place}>
        {id}
        <p>
          {position} {company ? `at ${company}` : ''}
        </p>
        <p>{location}</p>
        <p>
          {getStart(startMonth, startYear)}
          {getEnd(endMonth, endYear, isCurrent)}
          <span className={s.period}>
            {getPeriod(
              getStartDate(startMonth, startYear),
              getEndDate(endMonth, endYear, isCurrent),
            )}
          </span>
        </p>
      </div>
    ))}
    </div>
  </>
);

Experience.propTypes = {
  roles: PropTypes.array.isRequired,
};

export default React.memo(Experience);
