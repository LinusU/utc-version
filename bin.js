#!/usr/bin/env node

console.log(require('./')({ apple: (process.argv.indexOf('--apple') > 0) }))
