const {volver} = require('./sistema-folder/volver.js');
const {limpiarPantalla} = require('./ui-folder/limpiarPantalla.js');
const {mostrarTextoJuego} = require('./juegos-folder/dependencias-folder/mostrarTextoJuego.js');
const {preguntar} = require('./ui-folder/preguntar.js');
const {iniciarJuego} = require('./juegos-folder/dependencias-folder/iniciarJuego.js');
const {adivinarUnNumero} = require('./juegos-folder/adivinarUnNumero.js');
const {operacionesRapidas} = require('./juegos-folder/operacionesRapidas.js');


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

module.exports = {jugarUnJuego}