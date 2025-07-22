const {preguntar} = require('../../ui-folder/preguntar');
const {volver} = require('../../sistema-folder/volver');
const {mostrarError1} = require('../../sistema-folder/mostrarError1');

async function volverAJugar(callback) {
  const opcion = await preguntar("¿Volver a jugar? Si = 1, No = 2 R: ");
  if (opcion === "1") {
    await callback(); // Se ejecuta solo si el usuario elige "1"
  } else if (opcion === "2") {
    console.log("okay");
    await volver();
  } else {
    mostrarError1();
    await volverAJugar(callback); // Vuelve a preguntar si opción inválida
  }
}


module.exports = {volverAJugar};