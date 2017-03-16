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
module.exports = {
  schema: schema
}
