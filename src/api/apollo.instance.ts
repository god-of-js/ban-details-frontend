import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// Create an http link:
const link = new HttpLink({
  uri: `${process.env.VUE_APP_BASE_URL}/graphql`,
  fetch,
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
});

const apolloProvider = client;

export default apolloProvider;
