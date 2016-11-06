'use strict'

import request from 'request-promise-native'
import cheerio from 'cheerio'
import log from 'console-emoji'

export default function getLinks (url, selector) {
  if (!url || !selector) {
    log('Missing required parameters! (URL, CSS-Selector)', 'err')
    return false
  }

  return request(url)
    .then((html) => {
      let links = []
      let $ = cheerio.load(html)

      $(selector).each((i, el) => links.push($(el).attr('href')))
      return links
    })
    .catch(function (err) {
      log(err, 'err')
      return false
    })
}
