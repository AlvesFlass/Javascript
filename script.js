//console.log(true)
//console.log(false)


//let isLoading = true
//console.log(typeof isLoading)

//boolean armazena valores verdadeiro e falsos 

//Undefined (Indefinido ) e null  
 
//let emptiness
//console.log("0 valor e :", emptiness)

//let empty = null
//console.log("0 valor e :", empty)

//comversão de tipos 


/*let value ="9"
console.log(typeof value  ) 
console.log(typeof Number (value))

let age = 18 
console.log (typeof age. toString())
console.log(typeof String (age))
 
let option = -20
console.log(Boolean(option))
console.log(typeof Boolean (Option))
*/

//operadores sao simbolos para fazer operação em operando

// espressão e a cobinação de operadores variaveis e chamadas de função 

 

/* Operadores aritmeticos 
let number = 10 


//number = number + 1

number++
// Incrementa apos por isso nao mostra no console 
console.log(number++)
console.log(number)
//Incrementar antes
console.log(++number)
//Decremento

//console.log("Decremento apos:", number --)
//console.log(number--)
console.log("Drecremento antes:" , -- number)

number += 10
console.log (number)
// -= Diminui,  += AUMENTA

number -= 5 
console.log(number)
*/

/*
Ordem de Precedencia vai definir qual operação vai ser realizada primeiro 

ALTO  = EXPONENCIA
6 = MULTIPLICAÇÃO
5 =adição
4 relacional 
3 logico   not 
2 logico   and
1 logico  or 

 O parentesi ajuda a voce escolher qual soma sera feito preimeiro 

*/


//let number = ( 2 + 3) * 4 
//console.log(number)


// Grouping Operator ( ordem de precedencia )

 /*let total = 2 + 3 * 4
 console.log (total)

 let total2 = (2 + 3) * 4
 console.log (total2)

 let average = (9.5 + 7 + 5) / 3
 console.log (average )

*/

/*let one = 1 
let two = 2
// == igual a 
console.log (one == two)
console.log ( one == 1)
console.log (one == "1")



// != Diferente 
console.log ("####DIFERENTE DE ####")
console.log (one != two)
console.log ( one != 1 )
console.log(one != "1")

*/
/*
// Estritamnete igual a (tipo e valor )
 let one  = 1 
 let two = 2

 console.log(one === 1 )
 console.log( one === "1")


 // !== Estritamente difente de 

 console.log(one !== two )
 console.log(one !== 1 )
 console.log(two !== 2 )
 console.log(two !== "2" )
 */

 //let balance = 500 
 //let payment = 120

 // > operador de maior 
 /*console.log (balance> payment )
 
 // < Menor que 
// >= Maior ou igual a 
 console.log(balance<payment)
 
  balance = 120
  console.log(balance >= payment)

// Menor ou igual a <= 
balance = 500 
console.log (balance<= payment)
*/

 // Operador de atribuição 

 /*

let value 
value = 1 
console.log(value )

// Incremento 
value += 2 
console.log (value )

// Decremento 

value -= 1
console.log ( value )

// MUltiplicar 

value *= 3 
console.log(value)

// Divisão 
value /= 2 
console.log (value )

// Resto da divisão 

value %= 2 
console.log (value )

// potencia 


value **=2  
console.log (value )


*/

//Operadores logicos 
//let email =  true 

//let password = false

  // AND (E) &&


  //console.log (email && password)


// OR (OU pipe 


// not 9negação  !

//onsole.log (!password)

// Estrutura de condição  permite executar diferentes ações  com base em uma condição (verdadeira ou falsa ) 
/*operador ternario 

let age = 10
console.log (
      age >= 18 // condição  
      ? "Voce pode dirigir "  //  se verdadeiro 
      : "Voce não pode dirigir " // se falso 
    )

    console.log( 
      age < 10 
      ? "Voce não pode dirigir "
      : "Voce pode dirigir "
    )

    // Falsy e TruThy
    /*
    console.log( "### EXEMPLOS DE FALSY ###")
    console.log( false? "VERDADEIRO" : "FALSO" )
    console.log( 0? "VERDADEIRO" : "FALSO" )
    console.log( -0? "VERDADEIRO" : "FALSO" )
    console.log( ""? "VERDADEIRO" : "FALSO" )
    console.log( "null"? "VERDADEIRO" : "FALSO" )
    console.log( "undefined"? "VERDADEIRO" : "FALSO" )
    console.log( "NaN"? "VERDADEIRO" : "FALSO" )

    console.log( "### EXEMPLOS DE FALSY ###")
    console.log( "true"? "VERDADEIRO" : "FALSO" )
    console.log( "{}"? "VERDADEIRO" : "FALSO" )
    console.log( "[]"? "VERDADEIRO" : "FALSO" )
    console.log( "3.23"? "VERDADEIRO" : "FALSO" )
    console.log( "ROdrigo"? "VERDADEIRO" : "FALSO" )
    console.log( " "? "VERDADEIRO" : "FALSO" )




let hour = 10

if ( hour<=12){
  console.log( "BOMDIA")
  console.log( "Seja Bem vindo")
}
IF else   
else = se não 


let age = 23

if(age < 18 ){
  console.log("vOCE NAO PODE DIRIGIR")
} else {
  console.log ("Voce pode dirigir")
}



IF ELSE IF 

*/
/*
let hour = 13

if(hour <=12 ){
  console.log("Bomdia")
}
else if (hour>18){
  console.log("Boanoite")
}

else if(hour> 12){
  console.log("Boatarde")
}  
let hour = 13

if(hour<=12){
  console.log("Bom dia ")
}
else if (hour > 12 && hour <= 18){
  console.log("Boa tarde")
}
else{
  console.log("bOA NOITE")
}
 

let option = 1

switch(option){
  case 1:
    console.log("consultar pedido")
    break
    case 2:
      console.log("Falar com a atendente")
      default:
        console.log("Opção Invalida ")
}



Tratamento de Exceções

uma exceção e uma condição ou evento imprevisto que ocorre durante o uso da aplicação 

        /*
        let age = 19
        console.log(age => 20)
        
      let hour = 12
        if(hour<=12){
          console.log("Bomdia")
        }
    
      console.log(result)
      try {
        // Tenta executar algo
      }
      catch (Erro){
       } finally  {
        console.log("fim")          //Captura o erro para tratar
      }
  
     // função e um bloco de codigo que realiza uma tarefa especifica ou ccalcula um valor 

     function message (){
      console.log("Ola e bom ter voce aqui")
     }
     message() 
     message() 
     message() 
     */

  // parametro e a variavel que a função cvai receber 
  //passando o parametro username.
  function message (username) {
    console.log("Ola",username )
  }

  message("Rodrigo")
  message("Ana")

  function sum( a, b){
    console.log(a+b)
  }

  sum(10,20)
  sum(7,3)

   function joinText(text1, text2, text3){
    console.log(text1, text2, text3)
   }

   joinText("Rodrigo", "alves", "santana")
   joinText("alves","rodrigo","santana")