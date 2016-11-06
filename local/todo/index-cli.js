'use strict'

// babel-node src -u https://egghead.io/courses/learn-es6-ecmascript-2015 ".title a"
// babel-node src -u https://frapsoft.com --css "li a"

// urls
// https://egghead.io/courses/learn-es6-ecmascript-2015
// https://github.com/ellerbrock/egghead-video-download

import commander from 'commander'
import request from 'request'
import cheerio from 'cheerio'

// export default getLinks(url, css) {}

commander
  .version(version)
  .option('-u, --url <url>', 'URL')
  .option('-c, --css <css>', 'CSS Selector')
  .parse(process.argv)

if (commander.url && commander.css) {
  console.log(`You are using ${name.bold.green} Version: ${version.bold.yellow}\n`)
  request(commander.url, function (err, res, data) {
    if (!err && res.statusCode === 200) {
      let links = []
      let $ = cheerio.load(data)
      let video
      // let title = $('.title-subtitle-block h1').text()

      $(commander.css).each((i, el) => links.push($(el).attr('href')))

      async.eachLimit(links, 2, function (url, cb) {
        console.log(url)
        });


      }, function (err) {
        if (err) {
          console.log(`ERROR: ${err}`)
        }
      });

    } else {
      throw new Error(`Can't get URL: ${commander.url}`.bold.red)
    }
  })
} else {
  console.log('Error: '.bold.red + 'Missing required parameters!'.yellow)
  console.log(`Usage: ${name} --url https://example.com --css ".title a"`.green)
}