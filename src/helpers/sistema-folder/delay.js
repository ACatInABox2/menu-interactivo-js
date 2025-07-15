function esperar(ms) { // ponemos la cantidad de milisegundos que esperara el programa antes de resolver la promesa
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = {esperar}