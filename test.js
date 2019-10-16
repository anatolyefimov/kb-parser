const getUrlsFromPage = require('./fetchers/getUrlsFromPage.js')
const getBeerInfo = require('./fetchers/getBeerInfo.js');
const fs = require('fs')

const urls = require('./paths.js')
beersJSON = fs.readFileSync('./beers.json');

let beers = JSON.parse(beersJSON);
console.log(beers)
if (Object.keys(beers).length < 82) {

    for (let i = 0; i < 50; ++i) {
        if (!beers[i])
            getBeerInfo(urls[i], i, beers);
    }
    setTimeout(() => {
        console.log(JSON.stringify(beers, null, '\t'))
    }, 5000);


}
