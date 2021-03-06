import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CREATOR } from '../constatnts/routes.constants';

import Creator from '../containers/creator';
import TestUser from '../containers/test-user';
import TestResume from '../containers/test-resume';
import CvPage from '../containers/cv-page';

export const useRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={CvPage}
    />
    <Route
      exact
      path={CREATOR}
      component={Creator}
    />
    <Route
      exact
      path="/test-user"
      component={TestUser}
    />
    <Route
      exact
      path="/test-resume"
      component={TestResume}
    />
    <Redirect to="/" />

  </Switch>

);
