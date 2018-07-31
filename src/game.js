const funcs = require('./funcs')

class Game {
  constructor (loadName, newGame) {
    this.data = {}

    if (!loadName) {
      // create new game
    } else {
      // load game data
    }
  }

  parseLine (text) {
    const args = text.trim().split(/ +/g)
    switch (args[0]) {
      case 'status':
        return this.data
      default:
        return 'Invalid argument ' + args[0]
    }
  }

  saveGame () {
    return funcs.saveGame(this.data)
  }
}

module.exports = Game
