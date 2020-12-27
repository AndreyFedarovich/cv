import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CvDetails from './containers/cv-details';

export const useRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <CvDetails />
    </Route>
    <Redirect to="/" />
  </Switch>
);
