function limpiarPantalla() {
    console.clear() // limpia la consola para cuando el programa esta muy lleno.
}

function esperar(ms) { // dentro de los parentesis pondremos los milisegundos a esperar.
  return new Promise(resolve => setTimeout(resolve, ms)); // nos devuelve una promesa que se cumple luego del tiempo en milisegundos.
}
// exportamos las funciones.
module.exports = {esperar, limpiarPantalla} 