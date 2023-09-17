// par nome/valor
const saudacao = 'Olá' // contexto léxico 1
    // Nome    = valor
/* CONTEXTO LÉXICO: o local físico do seu código no qual sua variável foi definida.
O contexto léxico determina o valor da variável, bem como o escopo em que ela pode ser acessada.
*/

function exec() {
    // contexto léxico 2: só existe e pode ser acessado dentro desta função
    const saudacao = 'Coléee'
    return saudacao
}

console.log(saudacao)

console.log(exec())

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'Rua do bobo',
        numero: 0
    }
}
console.log(cliente)