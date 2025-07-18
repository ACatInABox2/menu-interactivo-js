
const {esperar} = require('./sistema-folder/delay.js');

const {volver} = require('./sistema-folder/volver.js');
const {mostrarError1} = require('./sistema-folder/mostrarError1.js');




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