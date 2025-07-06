// declaracion de valores constantes.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // creacion de interfaz

function preguntar(msg) {
  return new Promise(resolve => {
    rl.question(msg, resolve);
  }); // convertimos rl.question en una promesa para recursividad
}

function mostrarTextoMenu() {
// declaracion de mensajes constantes.
    const msg1 = "Este es nuestro menu:"
    const msg2 = "1. Apagar programa"
    const msg3 = "2. Jugar un juego"
    const msg4 = "3. Ver fecha y hora"
    const msg5 = "4. Ver datos del programa"
// impresion de valores constantes.
    console.log(msg1);
    console.log(msg2);
    console.log(msg3);
    console.log(msg4);
    console.log(msg5);
}

function limpiarPantalla() {
  console.clear(); // enserio necesita explicacion?
} // funcion para borrar la pantalla

module.exports = { rl, preguntar, mostrarTextoMenu, limpiarPantalla};
// exportamos funciones!
