import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Icon } from 'semantic-ui-react';

import { graphql, compose } from 'react-apollo';

import GET_AUTH_STATUS from '../apollo/getAuthStatus';
import UPDATE_AUTH_STATUS from '../apollo/updateAuthStatus';

import './NavBar.css';

class NavBar extends Component {
  handleSignIn = event => {
    event.preventDefault();
    const { getAuthStatus: { authStatus }, updateAuthStatus } = this.props;
    if (!authStatus.isAuthenticated) {
      updateAuthStatus({ variables: { isAuthenticated: true } });
    }
  };

  handleSignOut = event => {
    event.preventDefault();
    const { getAuthStatus: { authStatus }, updateAuthStatus } = this.props;
    if (authStatus.isAuthenticated) {
      updateAuthStatus({ variables: { isAuthenticated: false } });
    }
  };
  render() {
    return (
      <div>
        <Menu fixed="top" pointing inverted>
          <Menu.Item header>
            <Icon size="big" name="home" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button.Group>
              <Button primary size="mini" onClick={e => this.handleSignIn(e)}>
                Sign In
              </Button>
              <Button.Or />
              <Button positive size="mini" onClick={e => this.handleSignOut(e)}>
                Sign Out
              </Button>
            </Button.Group>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

NavBar.propTypes = {
  getAuthStatus: PropTypes.object.isRequired, // eslint-disable-line
  updateAuthStatus: PropTypes.func.isRequired, // eslint-disable-line
};

export default compose(
  graphql(GET_AUTH_STATUS, { name: 'getAuthStatus' }),
  graphql(UPDATE_AUTH_STATUS, { name: 'updateAuthStatus' })
)(NavBar);
