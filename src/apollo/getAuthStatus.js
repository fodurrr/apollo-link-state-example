import gql from 'graphql-tag';

export default gql`
  query getAuthStatus {
    authStatus @client {
      isAuthenticated
    }
  }
`;
