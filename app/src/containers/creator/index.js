import React, { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import cn from 'classnames';
import FullScreenToggle from '../../components/buttons/full-screen-toogle';
import CreatorForm from './creator-form';
import CreatorPreview from './creator-preview';
import CreatorPanel from './creator-panel';
import useCreator from './use-creator';
import s from './cv-creator.module.scss';

const Creator = () => {

  const [isFull, setFull] = useState(false);
  const { formManager, publish, save } = useCreator();

  return (
    <div className={cn(s.wrap, { [s.full]: isFull })}>
      <FormProvider {...formManager}>
        <div className={s.content}>
          <CreatorPreview />
        </div>
        <form onSubmit={publish} className={s.bar}>
          <CreatorPanel save={save} />
          <FullScreenToggle onClick={() => setFull(!isFull)} />
          <CreatorForm />
        </form>
      </FormProvider>
    </div>
  );
};

Creator.propTypes = {};

export default Creator;
