import React from 'react';
import PersonalInfo from './personal-info';
import Contacts from './contacts';
import About from './about';
import s from './cv-creator-preview.module.scss';

const CvCreatorPreview = () => (
  <div className={s.wrap}>
    <div className={s.content}>
      <PersonalInfo />
      <Contacts />
      <About />
    </div>

  </div>
);

CvCreatorPreview.propTypes = {};

export default CvCreatorPreview;
