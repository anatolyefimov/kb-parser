const getUrlsFromPage = require('./fetchers/getUrlsFromPage.js')
const getBeerInfo = require('./fetchers/getBeerInfo.js');

const urls = require('./paths.js')
let beers = []


urls.forEach(url => {
    getBeerInfo(url, beers);
})
setTimeout(() => {
    console.log(beers, beers.length)
}, 4000);



