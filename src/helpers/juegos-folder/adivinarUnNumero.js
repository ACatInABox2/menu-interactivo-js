const {limpiarPantalla} = require('../ui-folder/limpiarPantalla');
const {preguntar} = require('../ui-folder/preguntar');
const {volverAJugar} = require('./dependencias-folder/volverAJugar');
const {numeroAleatorio} = require('../sistema-folder/numeroAleatorio');

async function adivinarUnNumero() {
  limpiarPantalla();
  let numero = numeroAleatorio(10);
  const opcion = await preguntar("¿Cual es el numero? R: ");
  if (Number(opcion) === numero) {
    console.log("U WIN!");
    await volverAJugar(adivinarUnNumero);
  } else {
    console.log("Incorrecto!");
    console.log(numero)
    await volverAJugar(adivinarUnNumero);
  }
}

module.exports = {adivinarUnNumero};