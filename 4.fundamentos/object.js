const prod1 = {} // {} chaves representa um objeto
prod1.nome = 'iPhone'
prod1.preco = 6999
prod1['desconto'] = 0.40 // evitar atributos com espaço


console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 119.90
}

console.log(prod2)

/* OBS.: um object não é a mesma coisa que um JSON!

Um object é um tipo de dados em JavaScript que pode armazenar dados em pares de chave-valor.
Um JSON é uma forma de representar dados em formato de texto que pode ser facilmente lido
por humanos e máquinas.

A principal diferença entre um object e um JSON é que os keys de um object podem ser strings,
números ou identificadores, enquanto os keys de um JSON devem ser strings. 
Além disso, um object pode conter funções, enquanto um JSON não pode.

*/