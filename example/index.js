// example information
//
// github have a api to request information (https://developer.github.com/v3/)
// this is just an example how to use the npm module.
// the github frontend may change over time so the example won't work anymore.
//
// the main purpose of this script is to quick collect all links from
// a given site via dom selectors.
// its very useful to collect data from sites without an api.

import getLinks from 'get-links'
import log from 'console-emoji'

// get pinned repository links from github
const url = 'https://github.com/ellerbrock'
const selector = '.pinned-repo-item-content .d-block a'

getLinks(url, selector)
  .then(links => {
    log('GitHub: Pinned Repositories:', 'ok')
    links.forEach(v => log(`  :link:  ${url}${v}`))
  })