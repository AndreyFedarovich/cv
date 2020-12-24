import React from 'react';
import { phone, mail } from './data';
import s from './contacts.module.scss';

const Contacts = () => (
  <div className={s.wrap}>
    <p className={s.phone}>{phone}</p>
    <span className={s.separator} />
    <a href={`mailto:${mail}`} className={s.mail}>
      {mail}
    </a>
  </div>
);

export default Contacts;
