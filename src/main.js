// declaracion de valores constantes
const readline = require("readline");
const { esperar, limpiarPantalla } = require("./helpers"); // importamos las funciones de src/helpers.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // esto es parte para crear la interfaz para interactuar con el usuario en consola.

// ahora si, a iniciar a definir las funciones principales del programa.

function Iniciar() { // funcion a ejecutar para iniciar el programa
    limpiarPantalla() // limpia la pantalla antes de iniciar.
    console.log('¿desea iniciar el programa?') // mensaje 
    rl.question('1 = Si/Yes, 2 = No', async (respuesta1) => { // pregunta si iniciar el programa
        const opcion = Number(respuesta1) // convertimos la respuesta en un numero y la guardamos en una constante llamada opcion
        if (opcion === 1) { // se verifica si la respuesta es si o no:
            await esperar(2000); // espera 2 segundos antes de dar el mensaje
            console.log("iniciando programa.."); // si entonces da el mensaje de iniciando programa
            
        } else {
            console.log("adios/goodbye") // mensaje de adios
            rl.close() // cierra la interfaz
        }
    })
}
Iniciar() // PRUEBA