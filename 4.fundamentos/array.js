const valores = [7, 8, 9.2, 6.3]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 'Antonio'
console.log(valores)

valores[10] = 'Vitor'
console.log(valores)

console.log(valores.length)

// inserir valores ao final
valores.push({id:3}, false, null) // dicionario, boo, null
console.log(valores)

// remove o último valor
console.log(valores.pop())
// console.log(valores)

delete valores [10]
console.log(valores)