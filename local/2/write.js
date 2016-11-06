'use strict'

import request from 'request'
import fs from 'fs'

const url = 'https://frapsoft.com'
const out = 'download/elbi.html'


request(url).pipe(fs.createWriteStream(out))