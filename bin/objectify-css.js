#!/usr/bin/env node

const cssToObject = require('css-to-object')
const stringifyObject = require('stringify-object')
const clipboardy = require('clipboardy')

const input = clipboardy.readSync()
const css = cssToObject(input)
const style = stringifyObject(css, { indent: '  ' })

clipboardy.writeSync(style)
console.log(style)
