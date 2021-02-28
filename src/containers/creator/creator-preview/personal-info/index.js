import React from 'react';
import PropTypes from 'prop-types';
import s from './personal-info.module.scss';

const PersonalInfo = ({
  name, surname, position, location,
}) => (
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

PersonalInfo.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
};

PersonalInfo.defaultProps = {
  name: '',
  surname: '',
  position: '',
  location: '',
};

export default PersonalInfo;
