import React from 'react';
import { Menu, Grid, Segment } from 'semantic-ui-react';

import { graphql, compose } from 'react-apollo';

import getAuthStatusQuery from '../apollo/getAuthStatus';
import updateAuthStatusMutation from '../apollo/updateAuthStatus';

const Footer = ({ getAuthStatusQuery: { authStatus } }) => (
  <Menu fixed="bottom" inverted>
    {console.log(`isAuthenticated: ${authStatus.isAuthenticated}`)}
    <Grid container columns={2}>
      <Grid.Column>
        <Segment inverted textAlign="center">
          Authentication status: {authStatus.isAuthenticated}
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment inverted textAlign="center">
          Counter: ...
        </Segment>
      </Grid.Column>
    </Grid>
  </Menu>
);

export default compose(
  graphql(getAuthStatusQuery, { name: 'getAuthStatusQuery' }),
  graphql(updateAuthStatusMutation, { name: 'updateAuthStatusMutation' })
)(Footer);
