const fs = require('fs')

const getUrlsFromPage = require('./fetchers/getUrlsFromPage.js');
const getBeerInfo = require('./fetchers/getBeerInfo.js')
let urls = [1, 2].map(number => getUrlsFromPage(number));

Promise.all(urls)
    .then(arr => { console.log(arr); return arr.flat() })
    .then(beers => beers.map(beer => getBeerInfo(beer)))
    .then(res => Promise.all(res))
    .then(res => console.log(res))
    .catch(e => console.log(e))