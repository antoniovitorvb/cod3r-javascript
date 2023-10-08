function soma () {
    let soma = 0

    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(0))
console.log(soma(1))
console.log(soma(1, 2, 3, 4, 5))
console.log(soma(1, 2,'a', 3, 'bb', 4))
console.log(soma([1, 2, 3, 4, 5]))