### dltdojo-bigbro

DLTDOJO BIGBRO(道場大師兄)

### Install

```
npm i @y12/dltdojo-bigbro -S
```

### Usage

```
const Bigbro = require('@y12/dltdojo-bigbro')
const Gql = Bigbro.Gql
const gql = new Gql()
gql.query('{ ticker(id:"TWD") { id last buy sell} }').then(r => console.log(r))
```

### References
* chentsulin/awesome-graphql: Awesome list of GraphQL & Relay https://github.com/chentsulin/awesome-graphql#tools
