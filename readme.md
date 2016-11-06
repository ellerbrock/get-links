# [get-links](https://www.npmjs.com/package/get-links)

[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=100)](https://github.com/ellerbrock/javascript-badges/) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/ellerbrock/javascript-badges/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badges/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)

_get links via dom selector_

## Project Status

[![Build Status](https://travis-ci.org/ellerbrock/get-links.svg?branch=master)](https://travis-ci.org/ellerbrock/get-links)

## Overview

Often you want to quick select links from a side which doesn't provide a API.
For example you want to download all MP3 files from Podcast but normally have
to click each link manually or something like that.

This is where get-links comes handy.
You pass a URL and a DOM Selector and get in return an Array with all
URL's found for your query.

A good starting point for further action ...

### install with npm

`npm install --save get-links`

### install with yarn

`yarn add get-links`

### Example

#### ES5

```javascript
var log = require('get-links')
```

#### ES6

```javascript
import log from 'get-links'
```

### Examples

```javascript
// github have a api to request information (https://developer.github.com/v3/)
// this is just an example how to use the npm module.
// the github frontend may change over time so the example won't work anymore.
//
//
// functionality:
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
```

Output should look like this:  

![get-links](https://github.frapsoft.com/top/get-links.jpg)

### Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)

### License

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)