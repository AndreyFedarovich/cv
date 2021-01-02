import React from 'react';
import { useFormContext } from 'react-hook-form';
import { stack } from '../../../../constatnts/stack.constants';

import s from './stack.module.scss';

const Stack = () => {
  const { getValues } = useFormContext();
  const formOptions = getValues('stack') || [];
  console.log('formOptions: ', formOptions);
  const selectedOptions = formOptions.map(({ value, isActive }) => {
    if (isActive) return value;
    return null;
  });
  const options = stack.filter(({ value }) => selectedOptions.includes(value));

  return (
    <>
      <h2 className={s.title}>Stack</h2>
      <div className={s.stack}>
        {options.map(({ value, image }) => (
          <div className={s.block} key={value}>
            <img loading="lazy" src={image} alt={value} />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

Stack.propTypes = {};

export default Stack;
