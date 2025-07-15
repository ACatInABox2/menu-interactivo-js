const {mostrarTextoMenu} = require('../ui-folder/mostrarTextoMenu');
const {limpiarPantalla} = require('../ui-folder/limpiarPantalla');
const {mostrarError1} = require('./mostrarError1');
const {datosPrograma} = require('./datosPrograma');
const {esperar} = require('./delay');
const {preguntar} = require('../ui-folder/preguntar');
const { despedida } = require('./despedida');



async function ejecutar() {
  const {jugarUnJuego} = require('../juegos-folder/jugarUnJuego');
  const {volver} = require('./volver');
      limpiarPantalla();
      mostrarTextoMenu();
      const opcion = await preguntar("Eligue una opción: ");
      switch (opcion) {
        case "1":
          limpiarPantalla();
          await esperar(1000);
          await despedida();
          break;
        case "2":
          limpiarPantalla();
          await esperar(500)
          console.log("juego en desarrollo.."); // TEMPORAL
          await jugarUnJuego()
          await esperar(1500);
          await volver();
          break;
        case "3":
          limpiarPantalla();
          let momento = new Date();
          console.log("La fecha y hora actual es: " + momento);
          await esperar(1000);
          await volver();
          break;
        case "4":
          limpiarPantalla();
          await esperar(1000);
          datosPrograma(); 
          await volver();
          break;
        default:
          mostrarError1();
          await esperar(2500)
          await ejecutar();
      }
}

module.exports = {ejecutar};
