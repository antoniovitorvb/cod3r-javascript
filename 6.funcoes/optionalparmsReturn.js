function area(larg, alt) {
    let area = larg * alt

    if (area > 20) {
        console.log(`valor acima do permitido ${area} m2.`)
    } else {
        return area
    }
}

console.log(area(2,5))

console.log(area(2)) // alt = undefined
console.log(area()) // all = undefined
console.log(area(3, 4, 5, 6)) // só considera os 2 primeiros
console.log(area(10, 10))