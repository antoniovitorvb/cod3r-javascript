const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const pessoa2 = {
    saudacao: 'Bom dia 2!',
    falar() {
        console.log(saudacao) // removendo o this
    }
}
// pessoa2.falar() // ReferenceError: saudacao is not defined

const falar = pessoa.falar
falar() // undefined
/*
Neste caso há um conflito entre paradigmas:
Programação funcional (falar) Vs.  Prog Orientada a Objeto (pessoa.falar)
*/

const falarDePessoa = pessoa.falar.bind(pessoa) // inplace = false
// Com 'bind(pessoa)' sempre o this será resolvido para pessoa
falarDePessoa()



console.log('Usando setInterval...')
function pessoa3() {
    this.idade = 0

    setInterval(
        function () {
            this.idade++
            console.log(this.idade)
        }.bind(this),

        1000
    )
}
new pessoa3

console.log('\nUma alternativa')

function pessoa4() {
    this.idade = 0

    const self = this // assim é só chamar self ao invés de bind(this)
    setInterval(
        function () {
            self.idade++
            console.log(self.idade)
        },
        1000
    )
}
new pessoa4