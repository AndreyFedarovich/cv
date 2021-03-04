import React from 'react';
import useBodyClass from '../../hooks/use-body-class.hook';
import useCvPageContext from './use-cv-page-context';
import { CvPageContext } from '../../context';
import Stack from './stack';
import About from './about';
import Contacts from './contacts';
import Experience from './experience';
import Education from './education';
import PersonalInfo from './personal-info';
import s from './cv-page.module.scss';

const CvPage = () => {
  const state = useCvPageContext();
  const { mode } = state;
  useBodyClass(mode);

  return (
    <CvPageContext.Provider value={state}>
      <div className={s.wrap}>
        <PersonalInfo />
        <Contacts />
        <About />
        <Stack />
        <Experience />
        <Education />
      </div>
    </CvPageContext.Provider>

  );
};

export default CvPage;
