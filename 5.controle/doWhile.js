function randInt (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// let opcao = -1

do {
    opcao = randInt(-1, 10)
    console.log('Opção =', opcao)

} while (opcao != -1)

console.log('Fim do while')
console.log(opcao)