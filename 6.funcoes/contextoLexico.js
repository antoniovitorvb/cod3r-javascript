const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
// minhaFuncao()

function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec() // output: Global

/**
 * Quando uma função é declarada, ela carrega não somente seu algoritmo como também seu
 * contexto léxico. Não do seu local de EXECUÇÃO, mas sim o contexto em que ela foi DEFINIDA
 */