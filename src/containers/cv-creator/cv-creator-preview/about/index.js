import React from 'react';
import { useFormContext } from 'react-hook-form';
import s from './about.module.scss';

const About = () => {
  const { getValues } = useFormContext();
  const { summaryList } = getValues();
  return (
    <>
      <h2 className={s.title}>About</h2>
      <ul className={s.list}>
        {summaryList?.map(({ text }) => (
          <li className={s.text} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(About);
