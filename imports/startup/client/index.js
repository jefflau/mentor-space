import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, from } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';
import { withClientState } from 'apollo-link-state';

const defaultState = {
  foo: 'bar'
};

const stateLink = withClientState({
  cache,
  defaultState
});

//const ddpLink = new DDPLink()
const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
});

const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken();
  operation.setContext(() => ({
    headers: {
      'meteor-login-token': token
    }
  }));

  return forward(operation);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache
});

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('app')
  );
});
