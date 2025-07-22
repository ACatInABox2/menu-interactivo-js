
const {rl} = require('../helpers/sistema-folder/readline.js');

const {preguntar} = require('./ui-folder/preguntar.js');

const {despedida} = require('../helpers/ui.js');

const {Iniciar} = require('./sistema-folder/iniciar.js')

const {ejecutar} = require('./sistema-folder/ejecutar.js');

const {volver} = require('./sistema-folder/volver.js');

const {datosPrograma} = require('./sistema-folder/datosPrograma.js');

const {mostrarError1} = require('./sistema-folder/mostrarError1.js');

const {esperar} = require('./sistema-folder/delay.js');

const {mostrarTextoJuego} = require('./juegos-folder/dependencias-folder/mostrarTextoJuego.js');

const {mostrarTextoMenu} = require('./ui-folder/mostrarTextoMenu.js');

const {limpiarPantalla} = require('./ui-folder/limpiarPantalla.js');

const {jugarUnJuego} = require('./juegos.js');

const {adivinarUnNumero} = require('./juegos-folder/adivinarUnNumero.js');

const {volverAJugar} = require('./juegos-folder/dependencias-folder/volverAJugar.js');

const {operacionesRapidas} = require('./juegos-folder/operacionesRapidas.js');

const {iniciarJuego} = require('./juegos-folder/dependencias-folder/iniciarJuego.js');

const {numeroAleatorio} = require('./sistema-folder/numeroAleatorio.js');

module.exports = {
  rl,
  preguntar,
  mostrarTextoMenu,
  limpiarPantalla,
  esperar,
  volver,
  ejecutar,
  mostrarError1,
  datosPrograma,
  adivinarUnNumero,
  volverAJugar,
  jugarUnJuego,
  operacionesRapidas,
  iniciarJuego,
  mostrarTextoJuego,
  numeroAleatorio,
  despedida,
  Iniciar
};
