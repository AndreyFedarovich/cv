import React from 'react';
import { useFormContext } from 'react-hook-form';
import s from './about.module.scss';

const About = () => {
  const { getValues } = useFormContext();
  const { summary } = getValues();
  return (
    <>
      <h2 className={s.title}>About</h2>
      <ul className={s.list}>
        {summary?.map(({ text }, idx) => (
          // TODO: Use an id instead of idx
          <li className={s.text} key={idx}>{text}</li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(About);
