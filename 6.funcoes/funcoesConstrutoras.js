function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    // método privado
    let getVelAtual = function () {
        return velocidadeAtual
    } // não vai ser acassível ao object que eu criar
}

const uno = new Carro
uno.acelerar()
console.log('Uno:', uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log('Ferrari:', ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log('Ferrari:', ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log('Ferrari:', ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

