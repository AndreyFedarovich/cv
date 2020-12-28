import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CV_CREATOR } from '../constatnts/routes.constants';

import CvCreator from '../containers/cv-creator';
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
      path={CV_CREATOR}
      component={CvCreator}
    />
    <Redirect to="/" />

  </Switch>

);
