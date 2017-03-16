const Bigbro = require('@y12/dltdojo-bigbro')
const Gql = Bigbro.Gql
const gql = new Gql()
exports.endpoint = function (request, response) {
  var body = []
  request.on('data', function (chunk) {
    body.push(chunk)
  }).on('end', function () {
    body = Buffer.concat(body).toString()
      // response.end(body);
    gql.query(body).then(r => response.end(JSON.stringify(r)))
  })
   // query('{ ticker(id:"TWD") { id last buy sell} }').then(r=>response.end(JSON.stringify(r)))
}
