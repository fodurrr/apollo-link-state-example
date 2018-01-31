import gql from 'graphql-tag';

export default gql`
  mutation updateAuthStatus($isAuthenticated: boolean!) {
    updateAuthStatus(isAuthenticated: $isAuthenticated) @client
  }
`;
