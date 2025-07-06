const { error } = require("console");
const error1 = "Input no admitido, use 1 o 2"

function esperar(ms) { // ponemos la cantidad de milisegundos que esperara el programa antes de resolver la promesa
  return new Promise(resolve => setTimeout(resolve, ms));
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
          await ejecutar();
      }
}

async function volver(preguntar, ejecutar, mostrarError1) { // se mejora la modularizacion.
  const res = await preguntar("¿Volver al menú? 1 = Sí, 2 = No. R: ");
  if (res === "1") await ejecutar();
  else if (res === "2") await despedida();
  else mostrarError1(), ejecutar();
}

async function error1Mostrar() {
  console.error(error1);
  console.error("vuelvalo a intentar")
  await esperar(1000);
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


module.exports = { esperar, volver, ejecutar, error1Mostrar, datosPrograma};