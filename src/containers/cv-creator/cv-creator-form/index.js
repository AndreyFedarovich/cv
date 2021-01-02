import React, { useRef } from 'react';
import PersonalInfo from './personal-info';
import About from './about';
import Stack from './stack';
import Experience from './experience';
import s from './cv-creator-form.module.scss';

const CvCreatorForm = () => {
  const wrapRef = useRef(null);
  return (
    <div ref={wrapRef} className={s.wrap}>
      <div className={s.content}>
        <PersonalInfo />
        <About />
        <Stack wrapRef={wrapRef} />
        <Experience />
      </div>
    </div>
  );
};

CvCreatorForm.propTypes = {};

export default CvCreatorForm;
