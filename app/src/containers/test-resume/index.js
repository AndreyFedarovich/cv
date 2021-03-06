import React from 'react';
import ResumeCreator from './resume-creator';
import ResumesList from './resume-list';
import ResumeUpdater from './resume-updater';
import s from './test.module.scss';

const TestResumePage = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <ResumeCreator />
      <ResumeUpdater />
    </div>
    <ResumesList />
  </div>
);

TestResumePage.propTypes = {};

export default TestResumePage;
