import gql from 'graphql-tag';

export default gql`
  mutation updateAuthStatusMutation($isAuthenticated: boolean!) {
    updateAuthStatusMutation(isAuthenticated: $isAuthenticated) @client
  }
`;
