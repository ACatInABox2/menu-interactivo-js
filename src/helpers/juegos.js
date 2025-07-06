function mostrarTextoJuego() {
  // definicion de valores constantes
  const msg1 = "Este es nuestro menu de juegos:"
  const msg2 = "1. Adivinar numero"
  const msg3 = "2. Operaciones rapidas"
  const msg4 = "3. juego en desarrollo"
  // impresion de valores constantes.
  console.log(msg1);
  console.log(msg2);
  console.log(msg3);
  console.log(msg4);
}

async function iniciarJuego() {
   const msg = "Iniciando juego.."
      await esperar(200);
      console.log(msg);
      await esperar(400);
}

async function volverAJugar(a) {
  const opcion = await preguntar("¿Volver a jugar? Si = 1, No = 2 R: ");
    if (opcion === "1") {
      await a();
    } else if (opcion === "2") {
      console.log("okay");
      await volver();
    } else {
      error1Mostrar();
      await volverAJugar(a());
    }
}

async function adivinarUnNumero() {
  limpiarPantalla();
  let numero = numeroAleatorio();
  const opcion = await preguntar("¿Cual es el numero? R: ");
  if (Number(opcion) === numero) {
    console.log("U WIN!");
    await volverAJugar(adivinarUnNumero);
  } else {
    console.log("Incorrecto!");
    console.log(numero)
    await volverAJugar(adivinarUnNumero);
  }
}

async function operacionesRapidas(c, d) {
  limpiarPantalla();
  const num1 = numeroAleatorio(c);
  const num2 = numeroAleatorio(d);
  console.log(num1 + " + " + num2);
  const opcion = await preguntar("¿cual es la respuesta? R: ");
  if (Number(opcion) === num1 + num2) {
    console.log("U WIN!");
    volverAJugar(operacionesRapidas);
  } else {
    console.log("Incorrecto");
    volverAJugar(operacionesRapidas)
  }
}

async function jugarUnJuego() {
  limpiarPantalla();
  mostrarTextoJuego();
  const opcion = await preguntar("Elige una opción: ");
  switch (opcion) {
    case "1":
      await iniciarJuego();
      await adivinarUnNumero();
      await volver();
      break;
    case "2":
      await iniciarJuego();
      await operacionesRapidas(20, 15);
      await volver()
      break;
    case "3":
      await iniciarJuego();
      console.log("juego en desarrollo..");
      await volver()
      break;
  }
}

module.exports = {jugarUnJuego, operacionesRapidas, adivinarUnNumero, volverAJugar, iniciarJuego, mostrarTextoJuego}