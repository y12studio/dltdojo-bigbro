// Google cloud function GCF
// ---------------------
// curl -XPOST -H 'Content-Type:application/json' -d '{ "query":"{ticker(id:\"TWD\") { id last buy sell}}"}' https://us-central1-darkorange-161313.cloudfunctions.net/dltdojo-bigbro
// {"data":{"ticker":{"id":"TWD","last":38073.72,"buy":38073.1,"sell":38104.14}}}
// curl -XPOST -H 'Content-Type:application/json' -d '{ "query":"{ticker(id:\"USD\") { id last}}"}' https://us-central1-darkorange-161313.cloudfunctions.net/dltdojo-bigbro
// {"data":{"ticker":{"id":"USD","last":1219.82}}}
// --------------------
// package.json
// {
//  "name": "sample-http",
//  "version": "0.0.1",
//   "dependencies": {
//    "@y12/dltdojo-bigbro": "*"
//  }
// }

const Bigbro = require('@y12/dltdojo-bigbro')
const Gql = Bigbro.Gql
const gql = new Gql()
/**
 * Responds to any HTTP request that can provide a "query" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld (req, res) {
  // Example input: {"query": "{tickers{ id last}}"}
  if (req.body.query === undefined) {
    res.status(400).send('No query defined!')
  } else {
    // Everything is okay.
    console.log(req.body)
    // res.status(200).send('Success: ' + req.body);
    gql.query(req.body.query).then(r => res.status(200).send(JSON.stringify(r)))
  }
}
