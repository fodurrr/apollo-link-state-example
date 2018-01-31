import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

import { graphql, compose } from 'react-apollo';

import GET_AUTH_STATUS from '../apollo/getAuthStatus';

import './style.css';

const Home = ({ getAuthStatus: { authStatus } }) => (
  <div className="home">
    <Message color="green" size="massive" compact>
      You are{' '}
      {authStatus.isAuthenticated ? (
        <p>Signed In</p>
      ) : (
        <p style={{ color: 'red' }}>Signed Out</p>
      )}
    </Message>
  </div>
);

Home.propTypes = {
  getAuthStatus: PropTypes.object.isRequired, // eslint-disable-line
};

export default compose(graphql(GET_AUTH_STATUS, { name: 'getAuthStatus' }))(
  Home
);
