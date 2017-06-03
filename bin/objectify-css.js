#!/usr/bin/env node

const meow = require('meow')
const clipboardy = require('clipboardy')
const cssToObject = require('css-to-object')
const stringifyObject = require('stringify-object')

const cli = meow(`
  Usage
    $ objectify-css
`)

const input = clipboardy.readSync()
const css = cssToObject(input)
const style = stringifyObject(css, { indent: '  ' })

clipboardy.writeSync(style)
console.log(style)
