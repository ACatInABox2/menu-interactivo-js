// declaracion de valores constantes
const readline = require("readline");
const { esperar, limpiarPantalla } = require("./helpers"); // importamos las funciones de src/helpers.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // esto es parte para crear la interfaz para interactuar con el usuario en consola.

// ahora si, a iniciar a definir las funciones principales del programa.

async function textoMenu(a) {
    // mensajes constantes
    const msg1 = "Este es nuestro menu:"
    const msg2 = "1. Apagar programa"
    const msg3 = "2. Juegar un juego"
    const msg4 = "3. Ver fecha y hora"
    const msg5 = "4. Ver datos del programa"
    const msg3v2 = "2. Volver a jugar un juego"
    const msg = "0. Volver a la pestaña anterior"
    if (a === 1) {
        await esperar(500);
        console.log(msg1);
        await esperar(100);
        console.log(msg2);
        await esperar(100);
        console.log(msg3);
        await esperar(100);
        console.log(msg4);
        await esperar(100);
    console.log(msg5);
    } else if (a === 2) {
        await esperar(500);
        console.log(msg1);
        await esperar(100);
        console.log(msg);
        await esperar(100);
        console.log(msg2);
        await esperar(100);
        console.log(msg3v2);
        await esperar(100);
        console.log(msg4);
        await esperar(100);
        console.log(msg5);
    }
}

 async function mostrarMenu() {
    textoMenu(1);
    rl.question('¿A donde quiere ir?', async (respuesta) => {
        switch (Number(respuesta)) {
            case 1:
                console.log("Apagando programa..")
                await esperar(300)
                console.log("Programa apagado con exito!")
                rl.close()
                break;
            case 2: 
                console.log("Iniciando juego..")
                jugarJuego() // FUNCION PENDIENTE POR DEFINIR.
                textoMenu(2);
                rl.question('¿A donde quiere ir?', async (respuesta2) => {
                    
                })
        }
    })
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
            mostrarMenu()
        } else {
            console.log("adios/goodbye") // mensaje de adios
            rl.close() // cierra la interfaz
        }
    })
}
Iniciar() // PRUEBA