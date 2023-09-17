const obj = {nome: 'Vitor'}

/* SEM ERROR HANDLING

function printUpper(obj){
    console.log(obj.name.toUpperCase(), '!!')
}
printUpper(obj)

TypeError: Cannot read properties of undefined (reading 'toUpperCase')
*/

/*
JS -> Python
try {}       -> try:
catch (e) {} -> except (e):
throw        -> raise
finally {}   -> finally:
*/

function tratarErroELancar(erro) {
    // throw new Error(erro)
    // throw 10
    throw {
        date: new Date,
        name: erro.name,
        msg: erro.message
    }
}

function printUpper(obj) {

    try {
        console.log(obj.name.toUpperCase(), '!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('FINALMENTE...')
    }
}

printUpper(obj)