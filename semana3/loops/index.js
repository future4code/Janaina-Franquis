// EXERCICIO 1
// O que o código abaixo está fazendo? Qual o resultado impresso no console?
// RESPOSTA: É criado um laço que soma o valor i por cada incremento na variável. 
//           E o valor impresso na tela é 10


// EXERCICIO 2
// a. O que vai ser impresso no console?
// RESPOSTA: Todos os valores maiores que 18.

// b. Se eu quisesse acessar o índice de cada 
//    elemento dessa lista, o for...of... é suficiente? 
//    Se sim, o que poderia ser usado para fazer isso?
// RESPOSTA: 

// EXERCICIOS 3
/* Nas perguntas abaixo, considere que você tenha acesso a um array  (chamado de 'array original') 
   que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta 
   final de cada programa individualmente.*/

// a. imprima cada um dos valores do array original
       console.log(array)

// b. imprima cada um dos valores do array original dividido por 10
       for (let numero of array){
           console.log(numero/10)
       }

//c. Crie um novo array contendo, somente, os numeros pares do array original.
       let parArray = []
       for (let number of array){
           if (number%2===0){
               parArray.push(number)
           }
       }
       console.log(parArray)

// d. imprimir esse novo array  
       let index = 0
       for (let numero of array){
           console.log("O elemento do index i é: ", index + "é", numero)
           index++
       }

// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original
/*    Você deve criar variáveis para guardar o valorMaximo e o valorMinimo. Inicialize a variável
      valorMaximo com um valor que não seja maior que qualquer valor do array original e a valorMinimo 
      com um valor que não seja menor que qualquer valor do array original.*/
     // const array=[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
      let maiorNumero = array[0]
      let menorNumero = array[0]
      for (let numero of array){
          if (numero > maiorNumero){
              maiorNumero = numero
      }
      if (numero < menorNumero){
          menorNumero = numero
      }
    }
    console.log(`O maior numero é ${maiorNumero} e o menor é ${menorNumero}`)

