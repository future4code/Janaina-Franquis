// EXERCICIO 1
/* 
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if(numero % 2 === 0) {
    console.log("Passou no teste.")
    } else {
    console.log("Não passou no teste.")
    }*/

//Explique o que o código faz. Qual o teste que ele realiza? 
// Fazendo o teste com modulo para verificar se os numeros são impares e pares. 

// Para que tipos de números ele imprime no console "Passou no teste"? 
// Resposta: Pares
  

// Para que tipos de números a mensagem é "Não passou no teste"? 
// Respostas: Impares


// EXERCICIO 2
// Leia o código abaixo
/* 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//  a. Para que serve o código acima?
//     O código acima vai testando sequencia por sequencia. O Switch verifica se uma variavel éigual
//     à diferentes valores utilizando o CASE, e o break serve para cancelar a sequencia e o default
//     será acionado se nenhuma das anteriores for verdadeira

//  b. Qual será a mensagem impressa no console, se o valor da fruta for maça.
//     Resposta: Retorna o preços da fruta (O preço da fruta  Maçã  é  R$  2.25)

//  c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa
//     no console se retirássemos o break que está logo acima do default 
//     (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//     Resposta: A ação não será cancelara e irá informar o preços de 5


// EXERCICIO 3
// Leia o código abaixo.
/*  
    const numero = Number(prompt("Digite o primeiro número."))
    if(numero > 0) {
    console.log("Esse número passou no teste")
        let mensagem = "Essa mensagem é secreta!!!"
    }

console.log(mensagem)*/

// a. O que a primeira linha está fazendo?
//    Resposta: Solicita ao usuario inserir na caixa do prompt. Ao inserir os dado ele é transformado
//    em uma variavel de string para number.

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//    Resposta: O primeiro teste retorna a mensagem que o numero passou no teste, pois ele é maior que 0, já no segundo retorna que
//    a variavel mensagem não foi definida, ou seja não foi estabelecida uma condição.

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.


// EXERCICIO 4
/* Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele 
   e imprima no console se ele/ela pode dirigir (apenas maiores de idade).*/
// 1. Faça um prompt para receber a idade do usuário e guarde em uma variável.
// 2. Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
/* 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
      imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."*/
       const idadeUsuario = Number (prompt("Qual a sua idade?"))
       if (idadeUsuario >= 18){
           console.log("Você pode dirigir")
       } else {
           console.log("VocÊ não pode dirigir")
       }

// EXERCICIO 5
/* Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) 
   ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */
   const turnoAluno = prompt("Olá Aluno! Qual é o turno que você estuda? M (Manhã), T (Tarde) ou N (Noite) ")
   if (turnoAluno.toUpperCase() === "M"){
       console.log("Bom dia!")
   } else if (turnoAluno.toUpperCase()=== "T"){
       console.log("Boa tarde!")
   } else if (turnoAluno.toUpperCase()==="N"){
       console.log("Boa noite!")
       } else {
           console.log("Resposta incorreta!")
       }


// EXERCICIO 6
/* Repita o exercício anterior, mas utilizando a estrutura de switch case agora*/
  
   const turnoAluno = prompt("Olá Aluno! Qual é o turno que você estuda? M (Manhã), T (Tarde) ou N (Noite) ")

   switch
    (turnoAluno.toUpperCase()){
    case "M":
       console.log("Bom dia!")
       break
    case "T":
       console.log("Boa tarde!")
       break
    case "N":
       console.log("Boa noite!")
        break
   
       default:
        console.log("Resposta incorreta!")
        break
    }

    //EXERCICIO 7
    /*Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero 
    fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme
    que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
    Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("*/ 
    let generoFilme = prompt("Qual o gênero de filme que assistir?")
    let ingressoPreco = Number (prompt("Qual o valor do ingresso? "))
    
    let filmeCondicao = (generoFilme.toLowerCase() === "fantasia")
    let precoCondicao = (ingressoPreco <=15)
    
    if (filmeCondicao && precoCondicao){
        console.log("Tenha um bom filme!")
    } else {
        console.log("A que pena, então escolha outro filme!")
    }
    

