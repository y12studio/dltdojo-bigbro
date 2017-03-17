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
type Key {
    id: String!
    address: String!
    privateKey: String!
    publicKey: String
}
type Http418 {
    coffee:String
    randomkeys:[Key!]!
}
type Query {
    tickers:[Ticker!]!
    ticker(id: ID!):Ticker
    code418:Http418
}
schema {
	query: Query
}
`
module.exports = {
  schema: schema
}
