import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Textarea from '../../../components/inputs/textarea';
import Btn from '../../../components/buttons/btn';

import s from './creator-form.module.scss';

const About = () => {
  const { errors, control, register } = useFormContext();

  const {
    fields, append, remove,
  } = useFieldArray({
    control,
    name: 'summary',
  });

  return (
    <>
      <h2 className={s.title}>About</h2>
      <p className={s.description}>
        Type here at least three your main professional or personal qualities. Describe yourself bright, this section is the face of the CV
      </p>
      <div className={s.fields}>
        {fields?.filter((field) => field).map(({ id }, idx) => (
          <div key={id} className={s.areaField}>
            {idx > 0 && (
              <button
                className={s.cancel}
                type="button"
                onClick={() => remove(idx)}
              >Remove
              </button>
            )}
            <Textarea
              placeholder={idx === 0 && 'e.g. Web developer with over 3 years of experience'}
              name={`summary[${idx}].text`}

              ref={register()}
              error={errors.summary?.[idx]?.text.message}
            />
          </div>
        ))}
        <div className={s.field}>
          <Btn
            onClick={() => append({ text: '' })}
            type="button"
          >
            Add new field
          </Btn>
        </div>
      </div>

    </>
  );
};

export default About;
