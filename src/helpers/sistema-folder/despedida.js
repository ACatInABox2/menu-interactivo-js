const { rl } = require('./readline.js');

function despedida() {
  console.log("Gracias por usar el programa.");
  process.exit();
}

module.exports = {despedida};