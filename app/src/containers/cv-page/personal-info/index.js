import React, { useContext } from 'react';
import Panel from './panel';
import Social from './social';
import { CvPageContext } from '../../../context';
import { name, position, location } from './data';
import s from './personal-info.module.scss';

const PersonalInfo = () => {
  const { lang } = useContext(CvPageContext);
  return (
    <>
      <div className={s.line}>
        <h1 className={s.name}>{name[lang]}</h1>
        <div className={s.mobLine}>
          <Social />
          <Panel />
        </div>
      </div>
      <div className={s.posLine}>
        <h3 className={s.position}>{position[lang]}</h3>
        <p className={s.location}>
          <span className={s.separator}>{' '}-{' '}</span>
          <span className={s.locationContent}>{location[lang]}</span>
          {location.flag}
        </p>
      </div>
    </>
  );
};

PersonalInfo.propTypes = {};

export default PersonalInfo;
