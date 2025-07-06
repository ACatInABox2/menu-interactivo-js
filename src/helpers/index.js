
const { rl, preguntar, mostrarTextoMenu, limpiarPantalla } = require('./ui');

const { esperar, volver, ejecutar, error1Mostrar, datosPrograma} = require('./sistema');

const { adivinarUnNumero, volverAJugar, jugarUnJuego, operacionesRapidas, iniciarJuego, mostrarTextoJuego} = require('./juegos');

module.exports = {
  rl,
  preguntar,
  mostrarTextoMenu,
  limpiarPantalla,
  esperar,
  volver,
  ejecutar,
  error1Mostrar,
  datosPrograma,
  adivinarUnNumero,
  volverAJugar,
  jugarUnJuego,
  operacionesRapidas,
  iniciarJuego,
  mostrarTextoJuego
};
