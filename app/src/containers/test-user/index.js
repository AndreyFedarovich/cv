import React from 'react';
import UserCreator from './user-creator';
import UsersList from './users-list';
import UserUpdater from './user-updater';
import s from './test.module.scss';

const TestPage = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <UserCreator />
      <UserUpdater />
    </div>
    <UsersList />
  </div>
);

TestPage.propTypes = {};

export default TestPage;
