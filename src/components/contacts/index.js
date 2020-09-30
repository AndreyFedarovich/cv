import React from 'react';
import PropTypes from 'prop-types';
import s from './contacts.module.scss';

const Contacts = ({ phone, mail }) => (
  <div className={s.wrap}>
    <p className={s.phone}>{phone}</p>
    <span className={s.separator} />
    <a href={`mailto:${mail}`} className={s.mail}>
      {mail}
    </a>
  </div>
);

Contacts.propTypes = {
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};

export default Contacts;
