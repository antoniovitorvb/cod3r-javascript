/*
OPERADORES LÓGICOS:
    op1 && op2 -> INFIX - entre os operadores
    !op1 -> PREFIX - antes do operador
    op2++ -> POSFIX - após o operador (preferível, exceto o NOT (!))
*/

console.log('Operadores binários:')
/* Imagine que tens 2 trabalhos e para comemorar você decidiu que:
 - se algum trabalho der certo, vais tomar sorvete;
 - Se apenas um dos trabalhos der certo, vais comprar uma tv de 32";
 - se ambos os trabalhos derem certo, vais comprar uma tv de 55"
*/

function compras (t1, t2) {
    const sorvete = t1 || t2 // OR
    // const tv32 = !!(t1 ^ t2) // bitwise XOR
    const tv32 = t1 != t2 // XOR
    const tv55 = t1 && t2 // AND
    const saudavel = !sorvete // !OR (NOR)

    return { sorvete, tv32, tv55, saudavel }
}

console.log(compras(false, false))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(true, true))



console.log('\nOperadores unários:')
let n1 = 1
let n2 = 2

console.log(n1)
n1++ // incrementa 1
console.log(n1)

--n1 // decrementa 1
console.log(n1)

// PREFIX é mais "apressado" que os POSFIX
console.log(++n1 == n2--) // pela "pressa", vai comparar ++n1 a n2, sem decrementar n2



console.log('\nOperadores ternários:')
                        // op1 >= op2 ? op3 
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // true : false

console.log(resultado(7.2))
console.log(resultado(5.7))