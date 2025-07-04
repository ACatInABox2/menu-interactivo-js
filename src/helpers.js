// declaracion de valores constantes
const readline = require("readline");
const { error } = require("console");
const error1 = "Input no admitido, use 1 o 2"
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // esto es parte para crear la interfaz para interactuar con el usuario en consola.

function limpiarPantalla() {
    return console.clear() // limpia la consola para cuando el programa esta muy lleno.
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

async function error1Mostrar() {
  console.error(error1);
  console.error("vuelvalo a intentar")
  await esperar(1000);
}

function mostrarTextoJuego() {
  // definicion de valores constantes
  const msg1 = "Este es nuestro menu de juegos:"
  const msg2 = "1. Adivinar numero"
  const msg3 = "2. Operaciones rapidas"
  const msg4 = "3. juego en desarrollo"
  // impresion de valores constantes.
  console.log(msg1);
  console.log(msg2);
  console.log(msg3);
  console.log(msg4);
}

async function iniciarJuego() {
   const msg = "Iniciando juego.."
      await esperar(200);
      console.log(msg);
      await esperar(400);
}

async function volverAJugar(a) {
  const opcion = await preguntar("¿Volver a jugar? Si = 1, No = 2 R: ");
    if (opcion === "1") {
      await a();
    } else if (opcion === "2") {
      console.log("okay");
      await volver();
    } else {
      error1Mostrar();
      await volverAJugar(a());
    }
}


function numeroAleatorio() {
  const numero = Math.floor(Math.random() * 10) + 1
  return numero
}

async function adivinarUnNumero() {
  limpiarPantalla();
  let numero = numeroAleatorio();
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

async function operacionesRapidas(c, d) {
  limpiarPantalla();
  const num1 = numeroAleatorio(c);
  const num2 = numeroAleatorio(d);
  console.log(num1 + " + " + num2);
  const opcion = await preguntar("¿cual es la respuesta? R: ");
  if (Number(opcion) === num1 + num2) {
    console.log("U WIN!");
    volverAJugar(operacionesRapidas);
  } else {
    console.log("Incorrecto");
    volverAJugar(operacionesRapidas)
  }
}

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
      iniciarJuego();
      console.log("juego en desarrollo..");
      await volver()
      break;
  }
}

function datosPrograma() {
  const info = {
    Autor: "Santiago Torres",
    Usuario_Github: "ACatInABox2",
    Link_Repositorio_Actual: "https://github.com/ACatInABox2/menu-interactivo-js",
    Version: "v1.0"
  }
  console.log(info)
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
        await esperar(1500);
        return rl.close();
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
        error1Mostrar();
        await esperar(2500)
        ejecutar();
    }
}

async function volver() {
  const opcion = await preguntar("¿Quieres volver al menu principal? Sí = 1, No = 2 R: ");
        if (opcion === "1") {
          await ejecutar();
        } else if (opcion === "2") {
          rl.close();
        } else {
          await error1Mostrar();
          await volver();
        }
}

function esperar(ms) { // dentro de los parentesis pondremos los milisegundos a esperar.
  return new Promise(resolve => setTimeout(resolve, ms)); // nos devuelve una promesa que se cumple luego del tiempo en milisegundos.
}
// exportamos las funciones.
module.exports = {esperar, mostrarTextoMenu, volver, preguntar, ejecutar, rl, limpiarPantalla, error1Mostrar} 