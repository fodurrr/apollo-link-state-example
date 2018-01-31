import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Grid, Segment } from 'semantic-ui-react';

import { graphql, compose } from 'react-apollo';

import GET_AUTH_STATUS from '../apollo/getAuthStatus';

const Footer = ({ getAuthStatus: { authStatus } }) => (
  <Menu fixed="bottom" inverted>
    <Grid container columns={2}>
      <Grid.Column>
        <Segment inverted textAlign="center">
          Authentication status: {' '}
          {authStatus.isAuthenticated ? 'Signed In' : 'Signed Out'}
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment inverted textAlign="center">
          by Peter Fodor
        </Segment>
      </Grid.Column>
    </Grid>
  </Menu>
);

Footer.propTypes = {
  getAuthStatus: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(graphql(GET_AUTH_STATUS, { name: 'getAuthStatus' }))(
  Footer
);
