#!/usr/bin/env node

'use strict'

import commander from 'commander'
import request from 'request'
import cheerio from 'cheerio'
import fs from 'fs'
import { name, version } from '../package.json'
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "colors" }] */
import colors from 'colors'

commander
  .version(version)
  .option('-u, --url <url>', 'URL')
  .option('-c, --css <css>', 'CSS Selector')
  .option('-f, --file <file>', 'Output File')
  .parse(process.argv)

if (commander.url && commander.css && commander.file) {
  console.log('\nYou are using ' + name.bold.green + ' Version: ' + version.bold.yellow + '\n')

  request(commander.url, (err, res, data) => {
    if (!err && res.statusCode === 200) {
      let links = []
      let $ = cheerio.load(data)

      $(commander.css).each((idx, ele) => links.push($(ele).attr('href')))

      if (links.length > 0) {
        fs.exists(commander.file, (exists) => {
          if (exists) {
            return console.log(`${commander.file} already exists!`.bold.red)
          } else {
            fs.writeFile(commander.file, links.join('\n'), (err) => {
              if (err) throw err
              console.log(`${commander.file} saved successfull ...`.bold.green)
            })
          }
        })
      } else {
        return console.log(`Empty Result for selector "${commander.css}"`.bold.yellow)
      }
    } else {
      return console.log('Can`t get URL: ' + commander.url.bold.red)
    }
  })
} else {
  console.log('Error: '.bold.red + ' Missing required parameters!'.yellow)
  console.log('Usage: ' + name + ' --url http://url.de --css ".title a" --file out.txt')
}
