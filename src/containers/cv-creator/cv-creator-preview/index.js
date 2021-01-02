import React from 'react';
import PersonalInfo from './personal-info';
import Contacts from './contacts';
import About from './about';
import Stack from './stack';
import Experience from './experience';
import s from './cv-creator-preview.module.scss';

const CvCreatorPreview = () => (
  <div className={s.content}>
    <PersonalInfo />
    <Contacts />
    <About />
    <Experience />
    <Stack />
  </div>
);

CvCreatorPreview.propTypes = {};

export default CvCreatorPreview;
