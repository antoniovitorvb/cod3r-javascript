/** Immediately Invoked Function Expression
 *  Quando se quer fugir de manipular qualquer variável global, o uso de IIFE ajuda a isolar
 * o escopo em que a função irá trabalhar
 */ 

(function (){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})() // para chamar a função