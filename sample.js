const { ApolloServer , gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql ;
const data = [
  {
     name: 'Shivani',
     age: 18,
     color:'black',
  },
  {
     name: 'Devi',
     age: 22,
     color:'red',
  },
  {
     name: 'Ramya',
     age: 20,
     color:'green',
  },
];
const resolvers = {
  Query: {
    data: () => data,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀Server ready at ${url}`);
});