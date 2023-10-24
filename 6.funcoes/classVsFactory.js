class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Ana')
p2.falar()

/**
 * Importante diferença entre uma class e uma factory é que a class tem o escopo menor
 * então mesmo usando this.nome ele não apareceria para o escopo global de um browser.
 * 
 * Se você quer que um atributo do objeto tenha um escopo mais abrangente, a factory pode
 * fazer isso por você
 */

// DESAFIO: Transformar a class Pessoa numa função construtora

function criarPessoa (nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

p3 = new criarPessoa('Vitor')
p3.falar()