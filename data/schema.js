const schema = `
type Ticker {
    type: String
    buy: Float
    sell: Float
    last: Float
    updatedAt: String
    raw: String
}
type Query {
  getTicker(type:String): Ticker
}
schema {
	query: Query
}
`
module.exports = {
  schema: schema
}
