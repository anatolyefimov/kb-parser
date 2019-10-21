const fs = require('fs')

const getUrlsFromPage = require('./fetchers/getUrlsFromPage.js');
const getBeerInfo = require('./fetchers/getBeerInfo.js');

const urls = require('./paths.js')
beersJSON = fs.readFileSync('./beers_russian.json', 'utf8');
let beers = JSON.parse(beersJSON);
const beersPromises = urls.map((url, id) => (beers[id] || getBeerInfo(url)))

Promise.allSettled(beersPromises)
    .then(beersArr => {
        for (let i = 82; i < 82 + 29; ++i) {
            // console.log(beersArr[i])
            if (!beers[i] && beersArr[i].status === 'fulfilled') {
                beers[i] = beersArr[i].value;
            } else if (beersArr[i].status == 'rejected') {
                console.log(beersArr[i].reason)
            }
        }
        console.log(Object.keys(beers).length);
        fs.writeFileSync('./beers_russian.json', JSON.stringify(beers, null, '\t'), 'utf8')
    })

// [1, 2].forEach(number => {
//     getUrlsFromPage(number)
//         .then(urls => urls.flat())
//         .then(urls => {
//             console.log(urls)
//             console.log(urls.length)
//         })
//         .catch(e => console.log(console.log(e)))
// });