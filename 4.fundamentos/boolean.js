let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log('!!3',!!3)
console.log('!!-1',!!-1)
console.log('!!blank space',!!' ')
console.log('!![]',!![])
console.log('!!{}',!!{})
console.log('!!Infinity',!!Infinity)
console.log('!!(isAtivo = true)',!!(isAtivo = true))

console.log('os falsos...')
console.log('!!0',!!0)
console.log('!!empty',!!'')
console.log('!!null',!!null)
console.log('!!NaN',!!NaN)
console.log('!!undefined',!!undefined)
console.log('!!(isAtivo = false)',!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // ao menos 1 true

let nome = ''
console.log(nome || 'desconhecido') // se nome estiver vazio, imprime 'desconhecido'

nome = 'Antonio'
console.log(nome || 'desconhecido')