import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validation.schema';
import CvCreatorForm from './cv-creator-form';
import CvCreatorPreview from './cv-creator-preview';
import s from './cv-creator.module.scss';

const CvCreator = () => {
  const formManager = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      summaryList: [{
        text: '',
        placeholder: 'e.g. Web developer with over 3 years of experience',
      }],
    },
  });

  const { watch, handleSubmit } = formManager;
  const onSubmit = (data) => console.log(JSON.stringify(data));
  watch();

  return (

    <div className={s.wrap}>
      <FormProvider {...formManager}>
        <CvCreatorPreview />
        <form className={s.bar} onSubmit={handleSubmit(onSubmit)}>
          <button type="submit">Save</button>
          <CvCreatorForm />
        </form>

      </FormProvider>
    </div>
  );
};

CvCreator.propTypes = {};

export default CvCreator;
