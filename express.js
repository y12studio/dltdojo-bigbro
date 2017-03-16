var express = require('express')
var graphqlHTTP = require('express-graphql')
var Gql = require('./data/gql')
var gql = new Gql()

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: gql.schema,
  rootValue: gql.resolvers,
  graphiql: true
}))
app.listen(4000, '0.0.0.0')
console.log('Running a GraphQL API server at host:4000/graphql')
