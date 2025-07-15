const {limpiarPantalla} = require('../ui-folder/limpiarPantalla');
const {mostrarTextoJuego} = require('./mostrarTextoJuego');
const {preguntar} = require('../ui-folder/preguntar');
const {iniciarJuego} = require('./iniciarJuego');
const {adivinarUnNumero} = require('./adivinarUnNumero');
const {volver} = require('../sistema-folder/volver');
const {operacionesRapidas} = require('./operacionesRapidas');

async function jugarUnJuego() {
  limpiarPantalla();
  mostrarTextoJuego();
  const opcion = await preguntar("Elige una opción: ");
  switch (opcion) {
    case "1":
      await iniciarJuego();
      await adivinarUnNumero();
      await volver();
      break;
    case "2":
      await iniciarJuego();
      await operacionesRapidas(20, 15);
      await volver()
      break;
    case "3":
      await iniciarJuego();
      console.log("juego en desarrollo..");
      await volver()
      break;
  }
}

module.exports = {jugarUnJuego};