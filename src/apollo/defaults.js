// Set up default states for apollo-link-state
// eslint-disable-next-line import/no-mutable-exports
let defaults;
let localState;

try {
  localState = JSON.parse(localStorage.getItem('apollo-cache-persist'));
  defaults = {
    'authStatus@client': {
      isAuthenticated:
        localState['$ROOT_QUERY.authStatus@client'].isAuthenticated,
      __typename: 'AuthStatus',
    },
  };
} catch (error) {
  defaults = {
    'authStatus@client': {
      isAuthenticated: false,
      __typename: 'AuthStatus',
    },
  };
}

export default defaults;
