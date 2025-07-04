// declaracion de valores constantes
const readline = require("readline");
const { esperar, limpiarPantalla, mostrarTextoMenu} = require("./helpers"); // importamos las funciones de src/helpers.
const { error } = require("console");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // esto es parte para crear la interfaz para interactuar con el usuario en consola.

// ahora si, a iniciar a definir las funciones principales del programa.

function preguntar(mensaje) { // creamos la rl.question en forma de promesa para recursividad.
  return new Promise((resolve) => {
    rl.question(mensaje, (respuesta) => {
      resolve(respuesta);
    });
  });
}

async function ejecutar() {
    limpiarPantalla();
    mostrarTextoMenu(1);
    
}

//funcion: Iniciar(), nos servira para iniciar el programa.
function Iniciar() { // funcion a ejecutar para iniciar el programa
    limpiarPantalla() // limpia la pantalla antes de iniciar.
    console.log('¿desea iniciar el programa?') // mensaje 
    rl.question('1 = Si/Yes, 2 = No', async (respuesta1) => { // pregunta si iniciar el programa
        const opcion = Number(respuesta1) // convertimos la respuesta en un numero y la guardamos en una constante llamada opcion
        if (opcion === 1) { // se verifica si la respuesta es si o no:
            await esperar(2000); // espera 2 segundos antes de dar el mensaje
            console.log("iniciando programa.."); // si entonces da el mensaje de iniciando programa
            await esperar(2000) // por temas de comodidad y fina coqueteria
            ejecutar()
        } else if (opcion === 2) {
            console.log("adios/goodbye") // mensaje de adios
            rl.close() // cierra la interfaz
        } else {
          const error1 = "Input no admitido, use 1 o 2"
          console.error(error1);
          console.log("vuelvalo a intentar")
          await esperar(1000);
          Iniciar()
        }
    })
}
 Iniciar()