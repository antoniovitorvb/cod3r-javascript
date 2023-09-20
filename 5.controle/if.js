function soBoaNoticia(nota){
    if (nota >= 7) {
        console.log('Aprovado com', nota, '!')
    }
}

soBoaNoticia(5)
soBoaNoticia(8)

function ifTrue(valor) {
    if (valor) {
        console.log(valor, 'é verdade...')
    }
}

// TUDO FALSO
ifTrue() // undefined
ifTrue(null)
ifTrue(NaN)
ifTrue('')
ifTrue(0)
ifTrue(false)

// TUDO VERDADEIRO
ifTrue(true)
ifTrue('a') // qualquer string não vazia = true
ifTrue(1)
ifTrue(10)
ifTrue([1, 2, 3])
ifTrue({})

console.log('\nteste IF sem { ... }')
console.log('teste1:')
function teste1(num){
    if (num > 7)
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

console.log('teste2:')
function teste2 (num) {
    if (num > 7); { // Cuidado com o ';', ele "encerra a linha" do IF
        // NÃO usar ';' em estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)