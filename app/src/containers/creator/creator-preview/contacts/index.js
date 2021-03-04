import React from 'react';
import { useFormContext } from 'react-hook-form';
import s from './contacts.module.scss';

const Contacts = () => {
  const { getValues } = useFormContext();
  const { phoneNumber, email } = getValues();
  return (
    <div className={s.wrap}>
      {phoneNumber && <p className={s.phone}>{phoneNumber}</p>}
      {email && (
        <>
          <span className={s.separator} />
          <a href={`mailto:${email}`} className={s.mail}>
            {email}
          </a>
        </>
      )}
    </div>
  );
};

export default Contacts;
