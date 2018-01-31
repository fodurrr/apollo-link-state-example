import GET_AUTH_STATUS from './getAuthStatus';

export default {
  Mutation: {
    // Resolver signiature: fieldName: (obj, args, context, info) => result;
    updateAuthStatus: (_, variables, { cache }) => {
      // const previousState = cache.readQuery({ query: getAuthStatusQuery });

      // console.log(`previousState: ${previousState}`);

      const data = {
        authStatus: {
          isAuthenticated: variables.isAuthenticated,
          __typename: 'AuthStatus',
        },
      };

      cache.writeQuery({ query: GET_AUTH_STATUS, data });

      console.log(
        `isAuthenticated after mutation: ${variables.isAuthenticated}`
      );

      return {
        __typename: 'AuthStatus',
        isAuthenticated: variables.isAuthenticated,
      };
    },
  },
};
