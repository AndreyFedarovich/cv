import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { schema } from './validation.schema';
import CvCreatorForm from './cv-creator-form';
import CvCreatorPreview from './cv-creator-preview';
import CvCreatorPanel from './cv-creator-panel';
// import '../../assets/styles/vendors/datepicker.scss';
import s from './cv-creator.module.scss';

const CvCreator = () => {
  const [isFull, setFull] = useState(false);
  const formManager = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      summary: [{
        text: '',
        placeholder: 'e.g. Web developer with over 3 years of experience',
      }],
      roles: [{
        startMonth: '',
      }],
    },
  });

  const { watch, handleSubmit } = formManager;
  const onSubmit = (data) => console.log(JSON.stringify(data));
  watch();

  return (

    <div className={cn(s.wrap, { [s.full]: isFull })}>
      <FormProvider {...formManager}>
        <div className={s.content}>
          <CvCreatorPreview />
        </div>
        <form className={s.bar} onSubmit={handleSubmit(onSubmit)}>
          <CvCreatorPanel setFull={() => setFull(!isFull)} />
          <CvCreatorForm />
        </form>

      </FormProvider>
    </div>
  );
};

CvCreator.propTypes = {};

export default CvCreator;
