const getUrlsFromPage = require('./fetchers/getUrlsFromPage.js')
const getBeerInfo = require('./fetchers/getBeerInfo.js');
const fs = require('fs')

const urls = require('./paths.js')
beersJSON = fs.readFileSync('./beers.json', 'utf8');
let beers = JSON.parse(beersJSON);

if (Object.keys(beers).length < 82) {
    console.log('start')
    for (let i = 0; i < 82; ++i) {
        if (!beers[i]) {
            getBeerInfo(urls[i], i, beers);
        }
    }
    setTimeout(() => {
        console.log(beers);
        fs.writeFileSync('./beers.json', JSON.stringify(beers, null, '\t'), 'utf8')
        console.log('stop')
    }, 5000);


}
