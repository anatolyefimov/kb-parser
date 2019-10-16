const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const https = require('https')

const kb = require('../urls.js')

function getUrlsFromPage(number, buffer) {
    https.get(`https://krasnoeibeloe.ru/catalog/rossiyskoe/?PAGEN_1=${number}`, res => {
        let html = '';

        res.on('data', (data) => {
            html += data;
        })

        res.on('end', () => {
            // console.log(res.statusCode)
            const { document } = (new JSDOM(html)).window;

            let anchors = document.querySelectorAll('.product_item_name > a');
            anchors = Array.prototype.slice.call(anchors);
            let urls = anchors.map(anchor => anchor.getAttribute('href'));
            buffer.push(urls);
        })
    }).on('error', (e) => {
        console.log(error)
    })
}

module.exports = getUrlsFromPage;