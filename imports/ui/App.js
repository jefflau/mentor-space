import React from 'react';
import './globalStyles';
import { Route, Switch, Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql, withApollo, compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

import Header from './components/Header.js';
import Main from './pages/Main';

WebFont.load({
  google: {
    families: ['Raleway:400,700,900" ', 'sans-serif']
  }
});
//
const App = props => {
  return (
    <div>
      <Route exact path="/" component={Main} />
    </div>
  );
};
//

const userQuery = gql`
  query User {
    user {
      _id
    }
  }
`;

const enhance = compose(
  graphql(userQuery, {
    props: ({ data }) => ({
      ...data
    })
  }),
  withApollo,
  withRouter
);

export default enhance(App);
