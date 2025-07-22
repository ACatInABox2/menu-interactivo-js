
function despedida() {
  console.log("Gracias por usar el programa.");
  const {rl} = require('./sistema-folder/despedida');
  rl.close();
}

module.exports = {despedida};