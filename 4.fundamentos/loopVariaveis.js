for (var i = 0; i<10; i++) {
    console.log(i)
}
console.log('final var i =', i)

for (let j = 0; j<10; j++) {
    console.log(j)
}
// console.log('final let j =', j) // ReferenceError: j is not defined


console.log('Usando Var em loop com arrays')
const funcs = []
for (var i = 0; i<10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

console.log('Usando Let em loop com arrays')
const funcs2 = []
for (let i = 0; i<10; i++) {
    funcs2.push(function(){
        console.log(i)
    })
}
funcs2[2]()
funcs2[8]()