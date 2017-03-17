const fetch = require('node-fetch')
const _ = require('lodash')
const bitcore = require("bitcore-lib")
const ethjsaccount = require('ethjs-account');
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
class Key {
  constructor (_id, _address, _privateKey, _publicKey) {
    this.id = _id
    this.address = _address
    this.privateKey = _privateKey
    this.publicKey = _publicKey
  }
}
class Http418 {
  constructor () {
    this.coffee = "418 I'm a teapot"
    this.randomkeys = []
  }
}
const BCIURL = 'https://blockchain.info/ticker?cors=true'

const resolvers = {
  code418: () => {
    var r = new Http418()
    var privateKey = new bitcore.PrivateKey()
    r.randomkeys.push(new Key('bitcoin', privateKey.toAddress(), privateKey.toWIF(),privateKey.toPublicKey().toString() ))
    var ethkey = ethjsaccount.generate('892hfdsfds8shfs32423dfsi@hohskdfsd'+ Math.random())
    r.randomkeys.push(new Key('ethereum', ethkey.address, ethkey.privateKey, ethkey.publicKey))
    return r
  },
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
module.exports = {
  resolvers: resolvers
}
