import getAuthStatusQuery from './getAuthStatus';

export default {
  Mutation: {
    // Resolver signiature: fieldName: (obj, args, context, info) => result;
    updateAuthStatusMutation: (_, variables, { cache }) => {
      const previousState = cache.readQuery({ query: getAuthStatusQuery });

      console.log(`previousState: ${previousState}`);

      const data = {
        authStatus: {
          isAuthenticated: variables.isAuthenticated,
          __typename: 'AuthStatus',
        },
      };

      cache.writeQuery({ query: getAuthStatusQuery, data });

      console.log(`isAuthenticatedd: ${variables.isAuthenticated}`);

      return {
        __typename: 'AuthStatus',
        isAuthenticated: variables.isAuthenticated,
      };
    },
  },
};
