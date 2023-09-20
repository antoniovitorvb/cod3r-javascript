const printResult = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Aprovado summa cum laude!!')
            break

        case 8: case 7:
            console.log(`Aprovado com ${nota}!`)
            break
        
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log(`Reprovado com ${nota}!`)
            break
        
        default:
            console.log('Nota inválida')
    }

    console.log('Fim!')
}

printResult(10)
printResult(8.5)
printResult(7.2)
printResult(6.5)
printResult(-1)