import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://tribepub.storeredesign.com/graphql', // Replace with your WordPress GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
