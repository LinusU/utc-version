#!/usr/bin/env node

console.log(require('./')({
  apple: process.argv.includes('--apple'),
  short: process.argv.includes('--short')
}))
