const {
    graphql,
    buildSchema
} = require('graphql')

const schema = `
type Ticker {
    id: String
    buy: Float
    sell: Float
    last: Float
    updatedAt: String
    url: String
    raw: String
}
type Query {
    tickers:[Ticker!]!
    ticker(id: ID!):Ticker
}
schema {
	query: Query
}
`
const fetch = require('node-fetch')
const _ = require('lodash')
class Ticker {
  constructor (_id, _buy, _sell, _last, _raw, _datetime, _url) {
    this.id = _id
    this.buy = _buy
    this.sell = _sell
    this.last = _last
    this.raw = _raw
    this.updatedAt = _datetime
    this.url = _url
  }
}
const BCIURL = 'https://blockchain.info/ticker?cors=true'

const resolvers = {
  tickers: () => {
    return fetch(BCIURL).then(r => {
      return r.json()
    }).then(res => {
      return _.map(res, (v, k) => {
        return new Ticker(k, v.buy, v.sell, v.last, JSON.stringify(v), new Date().toISOString(), BCIURL)
      })
    })
  },
  ticker: ({id}) => {
    return fetch(BCIURL).then(r => {
      return r.json()
    }).then(res => {
      var v = res[id]
      return new Ticker(id, v.buy, v.sell, v.last, JSON.stringify(v), new Date().toISOString(), BCIURL)
    })
  }
}
const bschema = buildSchema(schema)
function query (gql) {
  return graphql(bschema, gql, resolvers)
}
// curl  -XPOST -d '{ ticker(id:"TWD") { id last buy sell } }' https://runkit.io/y12/58c8d91f1ef45700142b0dad/branches/master
exports.endpoint = function (request, response) {
  var body = []
  request.on('data', function (chunk) {
    body.push(chunk)
  }).on('end', function () {
    body = Buffer.concat(body).toString()
      // response.end(body);
    query(body).then(r => response.end(JSON.stringify(r)))
  })
   // query('{ ticker(id:"TWD") { id last buy sell} }').then(r=>response.end(JSON.stringify(r)))
}
