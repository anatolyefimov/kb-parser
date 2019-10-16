const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetch = require('node-fetch')
const kb = require('../urls.js')

async function getUrlsFromPage(number) {
    let res = await fetch(`${kb.catalogs.imported}?PAGEN_1=${number}`, {
        redirect: 'manual'
    });
    res = await res.text();
    const { document } = (new JSDOM(res)).window;

    let anchors = document.querySelectorAll('.product_item_name > a');
    anchors = Array.prototype.slice.call(anchors);

    let urls = anchors.map(anchor => anchor.getAttribute('href'));
    return urls;
}

module.exports = getUrlsFromPage;