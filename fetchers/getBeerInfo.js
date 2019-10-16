const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetch = require('node-fetch')
const kb = require('../urls.js')

async function getBeerInfo(url) {
    let res = await fetch(kb.main + url);
    res = await res.text();
    const { document } = (new JSDOM(res)).window;

    let img;
    try {
        img = 'https:' + document.querySelector(".pr_card_images_slide img").getAttribute('src');
    } catch (e) {
        img = ''
        console.log('without img', kb.main + url)

    }

    let name
    try {
        name = document.querySelector('h1').textContent;
    } catch (e) {
        name = ''
        console.log('without name???', kb.main + url)

    }
    let description = document.querySelector('.pr_card_descr_visible').textContent.trim();
    let volume = document.querySelector('.pr_card_char_item--VOLUME p').textContent;
    let country = document.querySelector('.pr_card_char_item--COUNTRY p').textContent;
    let brewery;
    try {
        brewery = document.querySelector('.pr_card_char_item--MANUFACTURER_NAME p').textContent;
    } catch (e) {
        brewery = ''
        console.log('without brewery', kb.main + url)
    }

    return { name, img, description, volume, country, brewery };
}

module.exports = getBeerInfo;