const {limpiarPantalla} = require('../ui-folder/limpiarPantalla');
const {preguntar} = require('../ui-folder/preguntar');
const {numeroAleatorio} = require('../sistema-folder/numeroAleatorio');
const {volverAJugar} = require('./volverAJugar');

async function operacionesRapidas(c, d) {
  limpiarPantalla();
  const num1 = numeroAleatorio(c);
  const num2 = numeroAleatorio(d);
  console.log(`${num1} + ${num2}`);
  
  const opcion = await preguntar("¿Cuál es la respuesta? R: ");
  if (Number(opcion) === num1 + num2) {
    console.log("U WIN!");
  } else {
    console.log("Incorrecto");
  }

  await volverAJugar(() => operacionesRapidas(c, d)); // PASA FUNCIÓN SIN EJECUTAR
}

module.exports = {operacionesRapidas}