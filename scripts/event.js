const shell = require('shelljs');
const EventEmitter = require('events').EventEmitter;
const { log } = require('./log.js');

class Emitter extends EventEmitter {
  constructor() {
    super();
    this.watchEslint();
  }
  watchEslint() {
    this.on('eslint', () => {
      // chalk();
      log('################### eslint check ###################');
      shell.exec('npx eslint --color ../node');
    });
  }
}
module.exports = new Emitter();
