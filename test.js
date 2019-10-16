const getUrlsFromPage = require('./fetchers/getUrlsFromPage.js')
const getBeerInfo = require('./fetchers/getBeerInfo.js');

// const urls = require('./paths.js')
const urls = [];
// console.log(urls.length)

// setTimeout(() => {
//     urls = urls.flat()
//     console.log(urls.length)
//     urls.forEach(url => {
//         getBeerInfo(url, beers);
//     })
//     // setTimeout(() => {
//     //     console.log(beers)
//     // }, 3000);
// }, 3000);


[1, 2, 3, 4].forEach(number => getUrlsFromPage(number, urls))

setTimeout(() => {
    console.log(urls.flat(), urls.flat().length)
}, 3000);
