const fetch = require('node-fetch')
const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const {
  GraphQLDateTime
} = require('graphql-iso-date')
class Ticker {
  constructor (_type, _buy, _sell, _last, _raw, _datetime) {
    this.type = _type
    this.buy = _buy
    this.sell = _sell
    this.last = _last
    this.raw = _raw
    this.updatedAt = _datetime
  }
}
const resolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Date time custom scalar type',
    parseValue (value) {
      return new Date(value) // value from the client
    },
    serialize (value) {
      return value.toJSON() // value sent to the client
    },
    parseLiteral (ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value) // ast value is always in string format
      }
      return null
    }
  }),
  getTicker: (args) => {
    return fetch('https://blockchain.info/ticker?cors=true').then(r => {
      return r.json()
    }).then(res => {
      var v = res[args.type]
      return new Ticker(args.type, v.buy, v.sell, v.last, JSON.stringify(res), new Date().toISOString())
    })
  }
}
module.exports = {
  resolvers: resolvers
}
