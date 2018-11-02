import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ uri: process.env.APOLLO_CLIENT_ENDPOINT || '/graphql' });


export default client
