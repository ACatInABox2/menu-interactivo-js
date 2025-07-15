const { preguntar } = require('../ui-folder/preguntar');
const { ejecutar } = require('./ejecutar');
const { mostrarError1 } = require('./mostrarError1');
const { despedida } = require('./despedida');

async function volver() {
  const res = await preguntar("¿Volver al menú? 1 = Sí, 2 = No. R: ");
  if (res === "1") {
    await ejecutar();
  } else if (res === "2") {
    await despedida();
  } else {
    await mostrarError1();
    await volver();
  }
}

module.exports = {volver};