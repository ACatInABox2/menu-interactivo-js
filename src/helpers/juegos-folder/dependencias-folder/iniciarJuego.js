const {esperar} = require('../../sistema-folder/delay');

async function iniciarJuego() {
   const msg = "Iniciando juego.."
      await esperar(200);
      console.log(msg);
      await esperar(400);
}

module.exports = {iniciarJuego};