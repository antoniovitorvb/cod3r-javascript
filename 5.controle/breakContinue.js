const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Break:')
for (let x in num) {
    if (x == 5) break
    console.log(x, 'num[x] =', num[x])
}

console.log('\nContinue:')
for (let y in num) {
    if (y % 2 == 0) continue
    console.log(y, 'num[y] =', num[y])
}

console.log('\nFor com rótulos:')
externo: for (let a in num) {
    for (let b in num) {
        if (a == 2 && b == 3) break externo // sem 'externo' o break seria apenas no loop b
        console.log('Par:', a, b)
    }
}
console.log('Fim!')