const soma = function (x, y) {
    return x + y
}

const imprimeResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimeResultado(7, 10)

imprimeResultado(7, 10, function (x, y) {
    return x - y
})

imprimeResultado(7, 10, (x, y) => x * y) // arrow function

const pessoa = {
    falar: function () {
        console.log('Olá!')
    }
}

pessoa.falar()