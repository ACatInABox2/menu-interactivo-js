// declaracion de valores constantes
const readline = require("readline");
const { esperar, limpiarPantalla } = require("./helpers"); // importamos las funciones de src/helpers.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // esto es parte para crear la interfaz para interactuar con el usuario en consola.