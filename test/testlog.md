### 2017-03-16T15:35:10+0800
curl
```
$ curl -XPOST -H 'Content-Type:application/graphql'  -d '{ ticker(id:"TWD") { id last buy sell} }' http://localhost:4000/graphql
{"data":{"ticker":{"id":"TWD","last":38221.14,"buy":38223.63,"sell":38267.08}}}
```
query
```
{
  tickerUSD: ticker(id:"USD") {
    id
    buy
    sell
    last
    updatedAt
    url
  },
  tickerTWD: ticker(id:"TWD") {
    id
    buy
    updatedAt
    url
  }
}
```
response
```
{
  "data": {
    "tickerUSD": {
      "id": "USD",
      "buy": 1237.1,
      "sell": 1238.75,
      "last": 1237.06,
      "updatedAt": "2017-03-16T07:34:40.059Z",
      "url": "https://blockchain.info/ticker?cors=true"
    },
    "tickerTWD": {
      "id": "TWD",
      "buy": 38394.64,
      "updatedAt": "2017-03-16T07:34:40.056Z",
      "url": "https://blockchain.info/ticker?cors=true"
    }
  }
}
```
### 2017-03-16T09:11:09+0800
```
$ node express.js
Running a GraphQL API server at host:4000/graphql
```
GraphQL request
```
{
  getTicker(type: "TWD"){
    buy
    last
    updatedAt
    sell
    raw
  }
}
```
GraphQL response
```
{
  "data": {
    "getTicker": {
      "buy": 38646.96,
      "last": 38662.79,
      "updatedAt": "2017-03-16T04:45:40.750Z",
      "sell": 38662.79,
      "raw": "{\"USD\":{\"15m\":1245.74,\"last\":1245.74,\"buy\":1245.23,\"sell\":1245.74,\"symbol\":\"$\"},\"ISK\":{\"15m\":134167.05,\"last\":134167.05,\"buy\":134112.13,\"sell\":134167.05,\"symbol\":\"kr\"},\"HKD\":{\"15m\":9672.51,\"last\":9672.51,\"buy\":9668.55,\"sell\":9672.51,\"symbol\":\"$\"},\"TWD\":{\"15m\":38662.79,\"last\":38662.79,\"buy\":38646.96,\"sell\":38662.79,\"symbol\":\"NT$\"},\"CHF\":{\"15m\":1259.38,\"last\":1259.38,\"buy\":1258.87,\"sell\":1259.38,\"symbol\":\"CHF\"},\"EUR\":{\"15m\":1167.16,\"last\":1167.16,\"buy\":1166.68,\"sell\":1167.16,\"symbol\":\"€\"},\"DKK\":{\"15m\":8674.52,\"last\":8674.52,\"buy\":8670.97,\"sell\":8674.52,\"symbol\":\"kr\"},\"CLP\":{\"15m\":827046.79,\"last\":827046.79,\"buy\":826708.2,\"sell\":827046.79,\"symbol\":\"$\"},\"CAD\":{\"15m\":1677.7,\"last\":1677.7,\"buy\":1677.01,\"sell\":1677.7,\"symbol\":\"$\"},\"CNY\":{\"15m\":8605.26,\"last\":8605.26,\"buy\":8601.74,\"sell\":8605.26,\"symbol\":\"¥\"},\"THB\":{\"15m\":44036.91,\"last\":44036.91,\"buy\":44018.88,\"sell\":44036.91,\"symbol\":\"฿\"},\"AUD\":{\"15m\":1650.97,\"last\":1650.97,\"buy\":1650.29,\"sell\":1650.97,\"symbol\":\"$\"},\"SGD\":{\"15m\":1759.17,\"last\":1759.17,\"buy\":1758.45,\"sell\":1759.17,\"symbol\":\"$\"},\"KRW\":{\"15m\":1431230.69,\"last\":1431230.69,\"buy\":1430644.75,\"sell\":1431230.69,\"symbol\":\"₩\"},\"JPY\":{\"15m\":143012.2,\"last\":143012.2,\"buy\":142953.65,\"sell\":143012.2,\"symbol\":\"¥\"},\"PLN\":{\"15m\":5062.97,\"last\":5062.97,\"buy\":5060.89,\"sell\":5062.97,\"symbol\":\"zł\"},\"GBP\":{\"15m\":1024.25,\"last\":1024.25,\"buy\":1023.84,\"sell\":1024.25,\"symbol\":\"£\"},\"SEK\":{\"15m\":11228.01,\"last\":11228.01,\"buy\":11223.41,\"sell\":11228.01,\"symbol\":\"kr\"},\"NZD\":{\"15m\":1799.6,\"last\":1799.6,\"buy\":1798.87,\"sell\":1799.6,\"symbol\":\"$\"},\"BRL\":{\"15m\":3911,\"last\":3911,\"buy\":3909.4,\"sell\":3911,\"symbol\":\"R$\"},\"RUB\":{\"15m\":73525.94,\"last\":73525.94,\"buy\":73495.84,\"sell\":73525.94,\"symbol\":\"RUB\"}}"
    }
  }
}
```
