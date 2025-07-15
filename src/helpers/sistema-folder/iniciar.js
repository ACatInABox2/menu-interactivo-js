const { error } = require("console");
const {rl} = require("../ui.js");
const {esperar} = require('./delay.js');
const { mostrarError1} = require("./mostrarError1.js");
const {preguntar} = require('../ui-folder/preguntar.js');
const { despedida } = require("./despedida.js");


//funcion: Iniciar(), nos servira para iniciar el programa.
async function Iniciar() { // funcion a ejecutar para iniciar el programa
    // limpiarPantalla() // limpia la pantalla antes de iniciar.
    console.log('¿desea iniciar el programa?') // mensaje 
     // pregunta si iniciar el programa
        const opcion = await preguntar('1 = yes, 2 = no. R:') // convertimos la respuesta en un numero y la guardamos en una constante llamada opcion
        if (Number(opcion) === 1) { // se verifica si la respuesta es si o no:
            await esperar(2000); // espera 2 segundos antes de dar el mensaje
            console.log("iniciando programa.."); // si entonces da el mensaje de iniciando programa
            await esperar(2000) // por temas de comodidad y fina coqueteria
            const {ejecutar} = require('./ejecutar.js');
            ejecutar()
        } else if (Number(opcion) === 2) {
           await despedida()
        } else {
          mostrarError1();
          Iniciar();
        }
    }

module.exports = {Iniciar}