import gql from 'graphql-tag';

export default gql`
  query getAuthStatusQuery {
    authStatus @client {
      isAuthenticated
    }
  }
`;
