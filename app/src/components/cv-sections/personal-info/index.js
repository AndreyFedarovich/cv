import React from 'react';
import Panel from './panel';
import Social from './social';
import s from './personal-info.module.scss';

const PersonalInfo = ({ name, position, location }) => (
  <>
    <div className={s.line}>
      <h1 className={s.name}>{name}</h1>
      <div className={s.mobLine}>
        <Social />
        <Panel />
      </div>
    </div>
    <div className={s.posLine}>
      <h3 className={s.position}>{position}</h3>
      <p className={s.location}>
        <span className={s.separator}>{' '}-{' '}</span>
        <span className={s.locationContent}>{location}</span>
        {/* {location.flag} */}
      </p>
    </div>
  </>
);

PersonalInfo.propTypes = {};

export default PersonalInfo;
