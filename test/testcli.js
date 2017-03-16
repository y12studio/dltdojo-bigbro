const Bigbro = require('../index')
const Gql = Bigbro.Gql
const gql = new Gql()
gql.query('{ ticker(id:"TWD") { id last buy sell} }').then(r => console.log(r))
