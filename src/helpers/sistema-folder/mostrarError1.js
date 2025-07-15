const {esperar} = require('./delay')
const error1 = "Input no admitido, use 1 o 2";

async function mostrarError1() {
  console.error(error1);
  console.error("vuelvalo a intentar")
  await esperar(1000);
}

module.exports = {mostrarError1}