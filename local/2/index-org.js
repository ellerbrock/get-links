'use strict'

import commander from 'commander'
import request from 'request'
import cheerio from 'cheerio'
import colors from 'colors'
import { name, version } from '../package.json'

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

      $(commander.css).each((i, el) => links.push($(el).attr('href')))
      console.log(links.join('\n'))
      return links
    } else {
      throw new Error(`Can't get URL: ${commander.url}`.bold.red)
    }
  })
} else {
  console.log('Error: '.bold.red + 'Missing required parameters!'.yellow)
  console.log(`Usage: ${name} --url https://example.com --css ".title a"`.green)
}
