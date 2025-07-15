const {rl} = require('../sistema-folder/readline');

function preguntar(msg) {
  return new Promise(resolve => {
    rl.question(msg, resolve);
  }); // convertimos rl.question en una promesa para recursividad
}

module.exports = {preguntar};