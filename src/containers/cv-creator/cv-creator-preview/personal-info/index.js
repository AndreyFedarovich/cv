import React from 'react';
import { useFormContext } from 'react-hook-form';
import s from './personal-info.module.scss';

const PersonalInfo = () => {
  const { getValues } = useFormContext();
  const {
    name, surname, position, location,
  } = getValues();
  return (
    <>
      <div className={s.line}>
        <h1 className={s.name}>{`${name || ''} ${surname || ''}`}</h1>
      </div>
      <div className={s.posLine}>
        {position && <h3 className={s.position}>{position}</h3>}
        {location && (
          <p className={s.location}>
            <span className={s.separator}>{' '}-{' '}</span>
            <span className={s.locationContent}>{location}</span>
            {location?.flag}
          </p>
        )}
      </div>
    </>
  );
};

PersonalInfo.propTypes = {};

export default PersonalInfo;
