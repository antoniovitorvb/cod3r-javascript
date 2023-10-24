const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '2',
    preco: 50
}
// Nenhum pouco escalável

// Factory é uma função que sempre retorna um novo OBJETO
// Factory simples:
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

console.log('Factory #2:')

function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('notebook', 2499))