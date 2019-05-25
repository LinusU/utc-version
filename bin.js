#!/usr/bin/env node

console.log(require('./')({
	apple: process.argv.contains('--apple'),
	short: process.argv.contains('--short')
}))
