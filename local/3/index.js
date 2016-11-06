'use strict'

if (!isTest) console.log('TEST RUNNING')
else console.log('no test running')

/*
import commander from 'commander'

commander
  .version(version)
  .option('-u, --url <url>', 'URL')
  .option('-c, --css <css>', 'CSS Selector')
  .option('-f, --file <file>', 'Output File')
  .parse(process.argv)

if (commander.url && commander.css && commander.file) {

} else {
  console.log('Error: '.bold.red + ' Missing required parameters!'.yellow)
  console.log('Usage: ' + name + ' --url http://url.de --css ".title a" --file out.txt')
}
*/