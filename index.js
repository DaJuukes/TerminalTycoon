#!/usr/bin/env node

// Require deps
const readline = require('readline')

// Require Game object
const Game = require('./src/game.js')

// Define global error handler
global.handleErr = function (text) {
  console.log(text)
  process.exit(0)
}

// Require default data
const defaultData = require('./data/default.json')

// Define Game class
let game

if (defaultData.defaultGame) {
  game = new Game(defaultData.defaultGame, false)
} else {
  if (process.argv[2]) game = new Game(process.argv[2], true)
  else handleErr('No game name specified')
}

// Setup ReadLine
const rl = readline.createInterface({ input: process.stdin })

rl.on('line', (text) => {
  const result = game.parseLine(text)
  console.log(result)
})
