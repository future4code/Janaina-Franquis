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
  const ordenado = array.sort((a, b) => {
    return b - a;
  });
  return [ordenado[1], ordenado[ordenado.length - 2]];
}

//Exercício 11
//Escreva uma função que recebe um array e retorne um array com eles em ordem crescente.
function ordenaArray(array) {
  return array.sort((a, b) => {
    return a - b;
  });
}

// Exercício 12
/*Crie uma função que retorne um objeto que representa o filme favorito do Astrodev. 
Ele deve ter as propriedades: nome, ano, diretor e atores, sendo que filme e diretor 
devem ser strings, ano deve ser um number e atores deve ser um array de strings.
 As informações (que são os valores das propriedades) do filme são: */
function filmeFavorito() {
  const nome = "O Diabo Veste Prada";
  const ano = 2006;
  const diretor = "David Frankel";
  const atores = [
    "Meryl Streep",
    "Anne Hathaway",
    "Emily Blunt",
    "Stanley Tucci",
  ];

  return {
    nome,
    ano,
    diretor,
    atores,
  };
}

// Exercício 13
/*Crie uma função que retorne a seguinte string, baseada nos valores do objeto que representa o filme 
  favorito do Astrodev no penúltimo exercício feito:
  Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR(A) e estrelado por ATOR 1, ATRIZ 2,
  ATOR n. A string deve ser impressa acessando os valores do objeto */
function imprimeChamada() {
  const { nome, ano, diretor, atores } = filmeFavorito();
  return `Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por ${atores.join(
    ", "
  )}.`;
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  // implemente sua lógica aqui
}

// Exercício 15
/* Considere:... Crie uma função que recebe um objeto nesse formato*, com as propriedades de nome, 
   idade, email e endereco e retorne um novo objeto com as mesmas propriedades, mas com a string 
   ANÔNIMO no lugar do nome.  */
function anonimizaPessoa(pessoa) {}

// Exercício 16
const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A
//a) Faça uma função que retorne um novo array só com os adultos (pessoas com idade igual ou superior a 20)
function maioresDe18(arrayDePessoas) {
  return arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 20;
  });
}

// Exercício 16, letra B
// Faça uma função que retorne um novo array só com as crianças/adolescentes (pessoas com idade inferior a 20)
function menoresDe18(arrayDePessoas) {
  return arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 20;
  });
}

// Exercício 17:  todos os itens deste exercício,
//você terá que escrever uma função cuja entrada seja um array. Para testes, considere: const array = [1, 2, 3, 4, 5, 6]

//Letra A
//Escreva uma função que retorne um array com as entradas multiplicadas por 2. Isto é [2, 4, 6, 8, 10, 12].
function multiplicaArrayPor2(array) {
  // implemente sua lógica aqui
}

//Exercício 17, letra B
//Escreva uma função que retorne um array com as entradas multiplicadas por 2 e como strings. Isto é: ["2", "4", "6", "8", "10", "12"]
function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C
//Escreva uma função que retorne um array de strings dizendo: "${número} é par/impar".
//Isto é: ["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]
function verificaParidade(array) {
  // implemente sua lógica aqui
}

// Exercício 18
/*Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de 
  ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror.
  As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. 
  Considere, então, essas pessoas: */

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

// Letra A
//Escreva uma função que receba este array e devolva outro array somente com as pessoas que tem permissão para entrar no brinquedo
function retornaPessoasAutorizadas() {
  return pessoas.filter((pessoa) => {
    const { idade, altura } = pessoa;
    return idade >= 14 && idade < 60 && altura >= 1.5;
  });
}

// Letra B
// Escreva uma função que receba este array e devolva outro array somente com as pessoas que não podem entrar no brinquedo.
function retornaPessoasNaoAutorizadas() {
  return pessoas.filter((pessoa) => {
    const { idade, altura } = pessoa;
    return idade < 14 || idade > 60 || altura < 1.5;
  });
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
/*Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, 
  você precisa entender como eles guardam as contas dos clientes.
  Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as 
  compras realizadas pelo cliente. Veja abaixo:*/

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];
/*A sua tarefa é: faça uma função que manipule um array com os objetos do tipo acima e atualize o saldo total
  individual de cada um, sem criar um novo array. Retorne o array original.  */

function atualizaSaldo() {
  // implemente sua lógica aqui
}
