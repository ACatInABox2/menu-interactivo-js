// declaracion de valores constantes
const readline = require("readline");
const { error } = require("console");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // esto es parte para crear la interfaz para interactuar con el usuario en consola.

function limpiarPantalla() {
     console.clear() // limpia la consola para cuando el programa esta muy lleno.
 }

function mostrarTextoMenu() {
  // declaracion de mensajes constantes.
    const msg1 = "Este es nuestro menu:"
    const msg2 = "1. Apagar programa"
    const msg3 = "2. Jugar un juego"
    const msg4 = "3. Ver fecha y hora"
    const msg5 = "4. Ver datos del programa"
    console.log(msg1);
    console.log(msg2);
    console.log(msg3);
    console.log(msg4);
    console.log(msg5); 
}

function preguntar(mensaje) { // creamos la rl.question en forma de promesa para recursividad.
  return new Promise((resolve) => {
    rl.question(mensaje, (respuesta) => {
      resolve(respuesta);
    });
  });
}

async function ejecutar() {
    limpiarPantalla();
    mostrarTextoMenu();
    const opcion = await preguntar("Eligue una opción: ");
    switch (opcion) {
      case "1":
        limpiarPantalla();
        await esperar(1500);
        console.log("cerrando programa..");
        rl.close();
      case "2":
        limpiarPantalla();
        await esperar(500)
        console.log("juego en desarrollo.."); // TEMPORAL
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
        datosPrograma(); // falta por definir
        await volver();
        break;
    }
}

async function volver() {
  const opcion = await preguntar("¿Quieres volver al menu principal? Sí = 1, No = 2");
        if (opcion === "1") {
          ejecutar();
        } else {
          rl.close()
        }
}

function esperar(ms) { // dentro de los parentesis pondremos los milisegundos a esperar.
  return new Promise(resolve => setTimeout(resolve, ms)); // nos devuelve una promesa que se cumple luego del tiempo en milisegundos.
}
// exportamos las funciones.
module.exports = {esperar, mostrarTextoMenu, volver, preguntar, ejecutar, rl} 