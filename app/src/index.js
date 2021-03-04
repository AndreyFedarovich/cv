import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client';

import App from './app';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
