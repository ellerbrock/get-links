'use strict'

// youtube-dl: https://github.com/fent/node-youtube-dl

import commander from 'commander'
import request from 'request'
// import eachLimit from 'async/eachLimit';
import async from 'async'
import cheerio from 'cheerio'
import colors from 'colors'
import { name, version } from '../package.json'

import fs from 'fs'
import youtubedl from 'youtube-dl'

// run
// babel-node src -u https://egghead.io/courses/learn-es6-ecmascript-2015 ".title a"
// babel-node src -u https://frapsoft.com --css "li a"

// urls
// https://egghead.io/courses/learn-es6-ecmascript-2015
// https://github.com/ellerbrock/egghead-video-download

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
        youtubedl.getInfo(url,  function(err, info) {
          if (err) console.log('Warning: Unsupported URL: ${url}')

          // console.log('id:', info.id);
          console.log('title:', info.title);
          console.log('url:', info.url);
          console.log('thumbnail:', info.thumbnail);
          console.log('description:', info.description);
          console.log('filename:', info._filename);
          console.log('format id:', info.format_id);
        });


        // video.on('info', function (info) {
        //   console.log('Download started');
        //   console.log('filename: ' + info.filename);
        //   console.log('size: ' + info.size);
        // })

        // video.pipe(fs.createWriteStream('myvideo.mp4'));

        // if (index < 10) index = '0' + index
        // console.log(`${index}.mp4`)

        // video = youtubedl(video)
        // video.pipe(fs.createWriteStream(`videos/${index} - ${title}.mp4`))
        cb()
      }, function (err) {
        if (err) {
          console.log(`ERROR: ${err}`)
        }
      });

      // links.forEach((video, index) => {
      //   if(index === 0) {
      //     console.log('download')
      //     video = youtubedl(video)
      //     video.pipe(fs.createWriteStream(`videos/${index} - ${title}.mp4`));
      //   }
      //   index++
      //   if (index < 10) index = '0' + index
      //   console.log(`../videos/${index} - ${title}.mp4`)
      //   // video = youtubedl(video)
      //   // video.pipe(fs.createWriteStream(`videos/${index} - ${title}.mp4`));
      // })

    } else {
      throw new Error(`Can't get URL: ${commander.url}`.bold.red)
    }
  })
} else {
  console.log('Error: '.bold.red + 'Missing required parameters!'.yellow)
  console.log(`Usage: ${name} --url https://example.com --css ".title a"`.green)
}