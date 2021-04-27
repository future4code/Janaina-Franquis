// EXERCICIO 1
// a. O que vai ser impresso no console?
//    Resposta: 10 / 50
/* b. O que aconteceria se retirasse os dois 
      console.log e simplesmente invocasse a função minhaFuncao(2) 
      e minhaFuncao(10)? O que apareceria no console?*/
//    Resposta: Undefined

// EXERCICIO 2
// a. Explicite quais são as saídas impressas no console.
//    Resposta: O código esta solicitando o retorno do 2 primeiro itens do array (i<2)
// b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
//    Resposta: Limpando o console irá retornar no array Amanda e Caio [0 e 1], caso o console não seja limpo
//    retorna que a outra função já foi declarada.

// EXERCICIO 3
// Resposta:

// EXERCICIO 4
/* a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
   "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."*/

function meuNome() {
  console.log(
    "Eu sou Janaina, tenho 39 anos, moro em São Paulo e sou estudante"
  );
}
/* Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), 
   a idade (number), a cidade (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string
   que unifique todas as informações da pessoa em uma só mensagem com o template: Eu sou [NOME], tenho [IDADE] anos, 
   moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.*/

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let cidade = prompt("Em qual cidade você mora?");
let estudante = confirm("Você é estudante? OK = SIM E CANCELAR = NÃO");

function meusDados(nome, idade, cidade, estudante) {
  if (estudante == true) {
    console.log("SOU");
  } else {
    console.log("NÃO SOU");
  }
}
console.log(
  " Eu sou ",
  nome,
  "tenho ",
  idade,
  ", ",
  "moro em ",
  cidade,
  " e ",
  estudante,
  " ",
  "estudante."
);

// EXERCICIO 5.
/* a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
      faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/
function soma(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

/* b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.*/
function maiorOuIgual(primeiroNumero, segundoNumero) {
  if (primeiroNumero >= segundoNumero) {
    console.log(
      "O primeiro número",
      primeiroNumero,
      "é maior que ",
      segundoNumero
    );
  } else {
    console.log(
      "O primeiro número",
      primeiroNumero,
      "não é maior que, ",
      segundoNumero
    );
  }
}

/* c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. 
      (não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)*/

let mensagem = "Mamão, granola e mel";
function repeticaoMensagem(mensagem) {
  for (let inicio = 0; inicio < 11; inicio++) {
    return mensagem;
  }
}

// EXERCICIO 6.
/* Para os itens a seguir, considere o seguinte array para os seus testes:
   const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]*/
// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele.
function quantidade() {
  const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
}
console.log(arrayTeste.length);

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function testeDeValidacao(array){
    const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
    for (let x of testeDeValidacao){
        if ( x % 2 === 0){
            console.log("Par")
        }
    }

}

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
