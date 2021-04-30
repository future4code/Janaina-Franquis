//Exercício 1
//Escreva uma função que recebe um array como parâmetro e retorne este array invertido. Obs: evite o uso da função reverse().
function inverteArray(array) {
  let arrayInvertido = [];
  for (let i = 1; i <= array.length; i++) {
    let n = array.length;
    arrayInvertido.push(array[array.length - i]);
    array.splice(n, 1);
  }
  return arrayInvertido;
}

//Exercício 2
//Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.

function retornaNumerosParesElevadosADois(array) {
  const arrayParesElevador = [];
  let paresElevador;
  for (let i of array) {
    if (i % 2 === 0) {
      paresElevador = i * i;
      arrayParesElevador.push(paresElevador);
    }
  }
  return arrayParesElevador;
}

//Exercício 3
//Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.

function retornaNumerosPares(array) {
  const arrayPares = [];
  for (let i of array) {
    if (i % 2 === 0) {
      arrayPares.push(i);
    }
  }
  return arrayPares;
}

//Exercício 4
//Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
  let numeroMaior = 0;
  for (let i of array) {
    if (numeroMaior < i) {
      numeroMaior = i;
    }
  }
  return numeroMaior;
}

//Exercício 5
//Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.

function retornaQuantidadeElementos(array) {
  return array.length;
}

//Exercício 6
// Para este exercícios considere as variáveis:
const booleano1 = true;
const booleano2 = false;
const booleano3 = !booleano2;
const booleano4 = !booleano3;

function retornaExpressoesBooleanas() {
  const respostaA = false;
  const respostaB = false;
  const respostaC = true;
  const respostaD = true;
  const respostaE = true;

  const resultado = [respostaA, respostaB, respostaC, respostaD, respostaE];
  return resultado;
}

//Exercício 7
//Escreva uma função que, recebendo um número N como parâmetro,
//retorne os N primeiros números pares (por exemplo, se N for 3,
//você deve imprimir 0, 2 e 4; se N for 5, deve retornar 0, 2, 4, 6 e 8).

function retornaNNumerosPares(n) {
  const vetor = [];
  for (let i = 0; i < n; i++) {
    vetor.push(i * 2);
  }
  return vetor;
}

// Exercício 8
/* Vocês lembram de trigonometria? (Oh, não, trigonometria). Relaxem. 
O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos
(uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. 
um triângulo possuir os três lados iguais, ele é chamado de "Equilátero". Se possuir,
dois (e somente 2) lados iguais, diz-se que ele é "Isósceles". Se os três lados tiverem medidas diferentes, 
ele é "Escaleno". Faça uma função que receba como parâmetro os tamanhos dos três lados do 
triângulo: a, b, c e retorne se ele é equilátero, isósceles ou escaleno. */

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
}

// Exercício 9
//Escreva uma função que, dado dois números, retorne um objeto indicando:
function comparaDoisNumeros(num1, num2) {
  // implemente sua lógica aqui
}

// Exercício 10
//Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM):
//o segundo maior e o segundo menor número do array original. (Desafio: tentem fazer sem usar função de ordenação de array.)
function segundoMaiorEMenor(array) {
  const ordenado = array.sort((a, b)=>{
    return b-a;
  })
  return [ordenado[1], ordenado[ordenado.length-2]]
}

//Exercício 11

function ordenaArray(array) {
  // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
  // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
  // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
  // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
  // implemente sua lógica aqui
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
  // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

//Exercício 19, letra A

function ordenaPorNome() {}

// Exercício 19, letra B

const consultasData = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

function ordenaPorData() {}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  // implemente sua lógica aqui
}
