'use strict'

// babel-node src -u https://egghead.io/courses/learn-es6-ecmascript-2015 ".title a"
// babel-node src -u https://frapsoft.com --css "li a"

// urls
// https://egghead.io/courses/learn-es6-ecmascript-2015
// https://github.com/ellerbrock/egghead-video-download

// import rp from 'request-promise'
import rp from 'request-promise-native'
import cheerio from 'cheerio'
import log from 'console-emoji'

export default function getLinks (url, css) {
  if (!url || !css) {
    log('Missing required parameters! (URL, CSS-Selector)', 'err')
    return false
  }

  const req = rp(url)
    .then((html) => {
      let links = []
      let $ = cheerio.load(html)

      $(css).each((i, el) => links.push($(el).attr('href')))
      // console.log(links)
    })
    .catch(function (err) {
      log(`Can't get URL: ${url}`, 'err')
      return false
    })

  return req.then
}