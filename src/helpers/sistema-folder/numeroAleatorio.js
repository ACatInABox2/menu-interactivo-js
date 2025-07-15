function numeroAleatorio(a) {
    let numero = Math.floor(Math.random() * a + 1)
    return numero
}

module.exports = {numeroAleatorio}