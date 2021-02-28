import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CREATOR } from '../constatnts/routes.constants';

import Creator from '../containers/creator';
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
    <Redirect to="/" />

  </Switch>

);
