function limpiarPantalla() {
    console.clear() // limpia la consola para cuando el programa esta muy lleno.
}

function mostrarTextoMenu(a) {
  // declaracion de mensajes constantes.
    const msg1 = "Este es nuestro menu:"
    const msg2 = "1. Apagar programa"
    const msg3 = "2. Jugar un juego"
    const msg4 = "3. Ver fecha y hora"
    const msg5 = "4. Ver datos del programa"
    const msg3v2 = "2. Volver a jugar un juego"
    const msg = "0. Volver a la pestaña anterior"
  // rectificacion de la ubicacion del usuario para evitar mensajes redundantes o sin sentido.
    if (a === 1) { // estado natural en el que debe iniciar el usuario
        console.log(msg1);
        console.log(msg2);
        console.log(msg3);
        console.log(msg4);
        console.log(msg5);
    } else if (a === 2) { // estado en el que usuario eligio la opcion 2
        console.log(msg1);
        console.log(msg);
        console.log(msg2);
        console.log(msg3v2);
        console.log(msg4);
        console.log(msg5);
    } 
}

function esperar(ms) { // dentro de los parentesis pondremos los milisegundos a esperar.
  return new Promise(resolve => setTimeout(resolve, ms)); // nos devuelve una promesa que se cumple luego del tiempo en milisegundos.
}
// exportamos las funciones.
module.exports = {esperar, limpiarPantalla, mostrarTextoMenu} 