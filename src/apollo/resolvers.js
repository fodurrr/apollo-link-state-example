import GET_AUTH_STATUS from './getAuthStatus';

export default {
  Mutation: {
    // Resolver signiature: fieldName: (obj, args, context, info) => result;
    updateAuthStatus: (_, variables, { cache }) => {
      const data = {
        authStatus: {
          isAuthenticated: variables.isAuthenticated,
          __typename: 'AuthStatus',
        },
      };

      cache.writeQuery({ query: GET_AUTH_STATUS, data });

      return {
        __typename: 'AuthStatus',
        isAuthenticated: variables.isAuthenticated,
      };
    },
  },
};
