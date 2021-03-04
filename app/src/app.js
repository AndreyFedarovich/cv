import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/global.scss';
import { useRoutes } from './routes';

const App = () => {
  const routes = useRoutes();
  return <Router>{routes}</Router>;
};

export default App;
