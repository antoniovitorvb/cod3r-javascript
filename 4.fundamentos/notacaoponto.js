console.log(typeof console)

console.log(Math.ceil(6.2))

const obj1 = {}

obj1['nome'] = 'Bola'
obj1.nome = 'Bola 2' // bem melhor...

console.log(obj1)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('this.exec...')
    }
}

/*
Similar ao 'self' em Python, A palavra-chave this em JavaScript se refere ao objeto que está
sendo referenciado em um determinado contexto ou escopo.
Ela pode ser usada dentro de uma função para se referir ao objeto que a chamou, ou pode ser
usada fora de uma função para se referir ao objeto global (atributo público)
(no caso do navegador, seria o objeto "window")
*/

const obj2 = new Obj('Cadeira')
console.log(obj2)
console.log(obj2.nome)

const obj3 = new Obj('Mesa')
console.log(obj3.nome)
obj3.exec()