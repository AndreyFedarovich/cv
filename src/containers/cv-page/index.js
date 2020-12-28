import React from 'react';

import Stackshare from './stackshare';
import About from './about';
import Contacts from './contacts';
import Experience from './experience';
import Education from './education';
import useBodyClass from '../../hooks/use-body-class.hook';
import useCvContext from '../../hooks/use-cv-context.hook';
import { CvPageContext } from '../../context';

import PersonalInfo from './personal-info';
import s from './cv-page.module.scss';
import DropdownSearch from '../../components/inputs/dropdown-search';

const options = [
  { id: 0, value: 'JavaScript' },
  { id: 1, value: 'Next.js' },
];

const CvPage = () => {
  const cvState = useCvContext();
  const { mode } = cvState;
  useBodyClass(mode);

  return (
    <CvPageContext.Provider value={cvState}>
      <div className={s.wrap}>
        <DropdownSearch options={options} />
        <PersonalInfo />
        <Contacts />
        <About />
        <Stackshare />
        <Experience />
        <Education />
      </div>
    </CvPageContext.Provider>

  );
};

export default CvPage;
