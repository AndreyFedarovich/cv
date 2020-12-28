import React from 'react';
import PersonalInfo from './personal-info';
import About from './about';
import Stack from './stack';

const CvCreatorForm = () => (
  <>
    <PersonalInfo />
    <About />
    <Stack />
  </>
);

CvCreatorForm.propTypes = {};

export default CvCreatorForm;
