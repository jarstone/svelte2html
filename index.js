#!/usr/bin/env node

const { resolve } = require('path').posix
const { writeFileSync } = require('fs')
require('svelte/register')({ preserveComments: true })

const src = process.argv[process.argv.length - 2]
const dst = process.argv[process.argv.length - 1]

const content = require(resolve(src)).default.render().html
writeFileSync(resolve(dst), content)
