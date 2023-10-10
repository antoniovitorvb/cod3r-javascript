/**
 * CLOSURE é o escopo criado quando uma função é declarada.
 * Esse escopo permite a função acessar e manipular variáveis externas à função e essas
 * variáveis externas têm tudo a ver com o contexto léxico (o contexto com o qual a função foi
 * declarada fisicamente dentro do código)
 * 
 * Contexto léxico em ação!
 */

const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())