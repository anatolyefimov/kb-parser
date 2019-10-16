const fetch = require('node-fetch')
const kb = require('./urls.js')

fetch(`https://krasnoeibeloe.ru/catalog/importnoe_pivo/?PAGEN_1=1`, {
        redirect: 'manual'
    })
    .then(res => res.text())
    .then(res => console.log(res))