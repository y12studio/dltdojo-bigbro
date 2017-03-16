const {
    graphql,
    buildSchema
} = require('graphql')
const Schema = require('./schema')
const Resolvers = require('./resolvers')

function Foo () {
  // console.log(Schema.schema)
  this.schema = buildSchema(Schema.schema)
  this.resolvers = Resolvers.resolvers
}

Foo.prototype.query = function (gql) {
  return graphql(this.schema, gql, this.resolvers)
}

module.exports = Foo
