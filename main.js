"use strict"
const fetch = require("node-fetch")
const cheerio = require("cheerio")
const scrapeIt = require("scrape-it")

    /**
     * Initiate scraping of proxy list website www.us-proxy.org 
     * @return {Promise} Promise => Array of proxy ip addresses such as '23.106.76.49:29842'
     */
function main() {
    return new Promise((resolve) => {
        let url = "https://www.us-proxy.org/"
        fetch(url).then(function(res) {
            return res.text()
        }).then(function(data) {
            let willReturn = []
            let $ = cheerio.load(data)
            let selector = "tr td"
            let state = ""
            $(selector).each(function(i) {
                let localState = $(this).text().trim()
                if (localState.includes(".")) {
                    state += localState
                }
                if (localState * 1 == localState) {
                    willReturn.push(`${state}:${localState}`)
                    state = ""
                }
            })
            resolve(willReturn)
        })
    })
}


    /**
     * Initiate scraping of proxy list website www.hide-my-ip.com 
     * @return {Promise} Promise => Array of proxy ip addresses with maximum length of 50
     */
// function first() {
//     return new Promise((resolve) => {
//         let url = "https://www.hide-my-ip.com/proxylist.shtml"
//         fetch(url).then(function(res) {
//             return res.text()
//         }).then(function(data) {
//             resolve(regexFn(data))
//         })
//     })
// }

    /**
     * Initiate scraping of proxy list website www.ultraproxies.com 
     * @return {Promise} Promise => Array of proxy ip addresses
     */
function second() {
	return new Promise((resolve) => {
        let willReturn = []
        let url = `http://www.ultraproxies.com/`
        scrapeIt(url, {
            examples: {
                listItem: "tr",
                data:{
                    dePart: {
                        selector: "td",
                        convert: (wordIs) => {
                            if(wordIs.includes(":")&&!wordIs.includes("cclweb03")){
                                willReturn.push(wordIs.split("-")[0])    
                            }
                            
                        }
                    }
                }
            }
        }).then(()=>{
            willReturn.shift()
            resolve(willReturn)      
        })
	})
}

function regexFn(str){
    let willReturn = []
    let just = str.match(/{"i".{88,107}"}/gm)    
    just.map((val, key)=>{
        if(key<50){
            let local = JSON.parse(val)
            willReturn.push(`${local.i}:${local.p}`)        
        }
    })
    return willReturn
}

module.exports.main = main
module.exports.first = second
module.exports.second = second
