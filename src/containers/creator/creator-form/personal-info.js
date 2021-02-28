import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../../../components/inputs/input';
import s from './creator-form.module.scss';

const PersonalInfo = () => {
  const { errors, register } = useFormContext();
  return (
    <>
      <h2 className={s.title}>Personal info</h2>
      <div className={s.fields}>
        <div className={s.field}>
          <Input
            className={s.input}
            label="Name"
            placeholder="Name"
            name="name"
            ref={register}
            error={errors.name?.message}
          />
          <Input
            className={s.input}
            label="Surname"
            placeholder="Surname"
            name="surname"
            ref={register}
            error={errors.surname?.message}
          />
        </div>
        <div className={s.field}>
          <Input
            className={s.input}
            label="Career objective"
            placeholder="Career objective"
            name="position"
            ref={register}
            error={errors.position?.message}
          />
          <Input
            className={s.input}
            label="Location"
            placeholder="Location"
            name="location"
            ref={register}
            error={errors.location?.message}
          />
        </div>
        <div className={s.field}>
          <Input
            className={s.input}
            label="Phone"
            placeholder="Phone"
            name="phoneNumber"
            type="phone"
            ref={register}
            error={errors.phoneNumber?.message}
          />
          <Input
            className={s.input}
            label="E-mail"
            placeholder="E-mail"
            name="email"
            type="email"
            ref={register}
            error={errors.email?.message}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
