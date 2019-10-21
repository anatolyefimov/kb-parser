const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetch = require('node-fetch')
const fs = require('fs');

const kb = require('../urls.js')

async function getBeerInfo(url) {
    let res = await fetch(kb.main + url);
    html = await res.text();
    console.log(kb.main + url)
    if (res.status === 200) {
        const { document } = (new JSDOM(html)).window;

        let imgUrl = 'https:' + document.querySelector(".pr_card_images_slide a").getAttribute('href');
        console.log(imgUrl)
        let imgName = imgUrl.match(/\w+\.(jpg|png)/i)[0];
        let img = await fetch(imgUrl);
        const dest = fs.createWriteStream('./images/' + imgName);
        img.body.pipe(dest);
        // console.log(imgUrl, imgName)

        image = 'images/' + imgName;

        let name = document.querySelector('h1').textContent;

        let description = document.querySelector('.pr_card_descr_visible').textContent.trim();
        let volume = document.querySelector('.pr_card_char_item--VOLUME p').textContent;
        let country = document.querySelector('.pr_card_char_item--COUNTRY p').textContent;
        let brewery;
        try {
            brewery = document.querySelector('.pr_card_char_item--MANUFACTURER_NAME p').textContent;
        } catch (e) {
            brewery = ''
        }
        let alcohol
        try {
            alcohol = document.querySelector('.pr_card_char_item--ALCOHOL p').textContent;
        } catch (e) {
            alcohol = ''
        }

        return { name, image, description, volume, alcohol, country, brewery };
    } else {
        console.log(res.status);
        return false;

    }


    // https.get(kb.main + url, res => {
    //     let html = '';

    //     res.on('data', (data) => {
    //         html += data;
    //     })
    //     res.on('end', () => {
    //         const { document } = (new JSDOM(html)).window;
    //         if (res.statusCode === 200) {

    //             let img = 'https:' + document.querySelector(".pr_card_images_slide a").getAttribute('href');

    //             // console.log(img)

    //             let name = document.querySelector('h1').textContent;

    //             let description = document.querySelector('.pr_card_descr_visible').textContent.trim();
    //             let volume = document.querySelector('.pr_card_char_item--VOLUME p').textContent;
    //             let country = document.querySelector('.pr_card_char_item--COUNTRY p').textContent;
    //             let brewery;
    //             try {
    //                 brewery = document.querySelector('.pr_card_char_item--MANUFACTURER_NAME p').textContent;
    //             } catch (e) {
    //                 brewery = ''
    //             }

    //             beers[id] = { name, img, description, volume, country, brewery }
    //         } else {
    //             console.log('fuck up')
    //                 //  console.log(res.statusCode)
    //         }
    //     })
    // }).on('error', (e) => {
    //     console.log(e);
    // })
}

module.exports = getBeerInfo;