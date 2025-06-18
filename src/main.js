// declaracion de valores constantes
const readline = require("readline");
const { esperar, limpiarPantalla } = require("./helpers"); // importamos las funciones de src/helpers.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // esto es parte para crear la interfaz para interactuar con el usuario en consola.

// ahora si, a iniciar a definir las funciones principales del programa.

function Iniciar() {
    console.log('¿desea iniciar el programa?')
    rl.question('1 = Si/Yes, 2 = No', (respuesta1) => {
        const opcion = Number(respuesta1)
        if (respuesta1 === 1) {
            console.log("iniciando programa..");
            // siguiente variable
        } else {
            rl.close("goodbye")
        }
    })
}
Iniciar()