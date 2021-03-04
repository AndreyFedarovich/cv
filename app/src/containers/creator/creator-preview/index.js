import React from 'react';
import PersonalInfo from './personal-info';
import Contacts from './contacts';
import About from './about';
import Stack from './stack';
import Experience from './experience';
import EmptyPreview from './empty-preview';
import useFormDataObserver from '../use-form-data-observer';

import s from './cv-creator-preview.module.scss';

const CvCreatorPreview = () => {
  const {
    isFormFilled,
    personalInfo,
    contacts,
    about,
    experience,
    stack,
  } = useFormDataObserver();

  return (
    <div className={s.content}>
      {isFormFilled ? (
        <>
          {personalInfo.isFilled && <PersonalInfo {...personalInfo} />}
          {contacts.isFilled && <Contacts {...contacts} />}
          {about.isFilled && <About {...about} />}
          {experience.isFilled && <Experience {...experience} />}
          {stack.isFilled && <Stack {...stack} />}
        </>
      ) : <EmptyPreview />}
    </div>
  );
};

CvCreatorPreview.propTypes = {};

export default CvCreatorPreview;
