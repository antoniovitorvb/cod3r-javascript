console.log('1ª Estratégia para gerar valor padrão')
function soma1 (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(
    soma1(),
    soma1(5),
    soma1(1, 2, 3),
    soma1(0, 0, 0) // 0 retorna False
)

console.log('\n2ª Estratégia para gerar valor padrão')
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1 // operador ternário ? Se True : se False
    b = 1 in arguments ? b : 1 // existe o arguments[1] ? True : False
    c = isNaN(c) ? 1 : c // mais segura

    return a + b + c
}
console.log(
    soma2(),
    soma2(5),
    soma2(1, 2, 3),
    soma2(0, 0, 0)
)

console.log('\n3ª Estratégia valor padrão do ES2015')
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(
    soma3(),
    soma3(5),
    soma3(1, 2, 3),
    soma3(0, 0, 0)
)