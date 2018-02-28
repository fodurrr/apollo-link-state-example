import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';

// Import default states for apollo-link-state
import defaults from './defaults';
// Import resolvers for apollo-link-state
import resolvers from './resolvers';

// Local in memory cache for Apollo
const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage,
});

// console.log(`Defaults: ${JSON.stringify(defaults, null, 2)}`);

const stateLink = withClientState({
  resolvers, // local resolvers
  defaults, // default local states
  cache,
});

export default new ApolloClient({
  link: ApolloLink.from([stateLink, new HttpLink()]),
  cache,
});

// Sometimes you may need to reset the store in your application,
// for example when a user logs out. If you call client.resetStore anywhere
// in your application, you will need to write your defaults to the store again.
//  apollo-link-state exposes a writeDefaults function for you.
//  To register your callback to Apollo Client, call client.onResetStore and pass in writeDefaults.
// client.onResetStore(stateLink.writeDefaults);

// export default client;
