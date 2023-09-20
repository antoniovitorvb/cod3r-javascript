function randInt (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = randInt(-1, 10)

    console.log('Opção =', opcao)
}
console.log('Fim do while')
console.log(opcao)