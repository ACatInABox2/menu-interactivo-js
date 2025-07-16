
function despedida() {
  console.log("Gracias por usar el programa.");
  const {rl} = require("./ui.js");
  rl.close();
}

module.exports = {despedida};