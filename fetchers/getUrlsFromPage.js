const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const https = require('https')
const fs = require('fs')

const kb = require('../urls.js')

async function getUrlsFromPage(number) {

    // // console.log(res.statusCode)
    // const { document } = (new JSDOM(html)).window;

    // let anchors = document.querySelectorAll('.product_item_name > a');
    // anchors = Array.prototype.slice.call(anchors);
    // let urls = anchors.map(anchor => anchor.getAttribute('href'));
    // buffer.push(urls);

}

module.exports = getUrlsFromPage;