const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const kb = require('../urls.js')

const https = require('https')

function getBeerInfo(url, beers) {
   https.get(kb.main + url , res => {
        let html = '';

        res.on('data', (data) => {
            html += data;
        })
        res.on('end', () => {
            const { document } = (new JSDOM(res)).window;
            if (res.statusCode === 200) {
                let img = document.querySelector(".pr_card_images_slide a").getAttribute('href');

                // console.log(img)

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

                beers.push({ name, img, description, volume, country, brewery })
            }
            else {
                console.log('fuck up')
            }
        })
   }).on('error', (e) => {
       console.log(e);
   })
}

module.exports = getBeerInfo;