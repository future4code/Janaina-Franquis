/* 1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
Resposta: 10 e 5*/

/* 2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
Resposta: 10 */

//EXERCICIO DE ESCRITA DE CÓDIGO 
// 1. Construa um programa, seguindo os seguintes passos:

// a) Declare uma variavel para armazenar um nome, sem atribuir um valor.
        const nome;

// b) Declare uma váriavel para armazenar uma idades, sem atribuir valor.
        let idade;

// c) Imprima no console o tipo dessas variaveis que acabou de criar, usando o comando typeof
        console.log(typeof nome, idade)

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//Resposta: undefined, porque os valores não foram atribuidos.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
        prompt("Qual é o seu nome?")
        prompt("Qual é a sua idade?")

// f) Novamente, imprima no console o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
/* console.log(nome), console.log(idade), retornaram Uncaught ReferenceError:  is not defined, ou seja, a variavel é inexistente, e precisa ser declarada. */

// g) Para finalizar, imprima no console a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.
        const nome = prompt("Qual é o seu nome?");
        let idade = prompt ("Qual é a sua idade?");
        console.log("Olá " + nome + " você tem " + idade + " anos");

// 
/* 2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:*/ 
        const nome = prompt("Qual é o seu nome?");
        let idade = prompt ("Qual é a sua idade?");
            endereco = prompt ("Qual é o seu endereço?")
            corFavorita= prompt ("Qual é a sua cor favorita?") 
            animalDeEstimação = prompt("Você tem animal de estimação?") 
            console.log("Resposta: " + (nome + " " + idade + " " + endereco + " " + corFavorita + " "+ animalDeEstimação + " ")); 

/* 3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos: */
        let comidasPreferidas = ["Arroz", "feijão", "Salada Legumes", "Nachos gratinado", "Feijoada"];
      
// a) imprima no console  array completo.  
        console.log(comidasPreferidas);

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
        console.log("Essas são minhas comidas preferidas: ")
        console.log(comidasPreferidas[0]);
        console.log(comidasPreferidas[1]);
        console.log(comidasPreferidas[2]);
        console.log(comidasPreferidas[3]);
        console.log(comidasPreferidas[4]);

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no  console a nova lista 
        let comidaUsuario = prompt ("Qual sua comida preferida?");
            console.log("Nova lista de comidas preferidas")
            console.log(comidasPreferidas[0]);
            console.log(comidaUsuario);
            console.log(comidasPreferidas[2]);
            console.log(comidasPreferidas[3]);
            console.log(comidasPreferidas[4]);

// 4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
        let perguntas = ["Você está bem?", "Está aprendendo JS?", "Você está conseguindo aprender sobre array?" ];

//  a)Crie uma nova variável, contendo um array com as três respostas. Utilize o tipo booleano (true ou false) para cada resposta.
        let resposta = [true, true, false];
    
//  b)  Imprima no console todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
        console.log(perguntas[0], resposta[0])
        console.log(perguntas[1], resposta[1])
        console.log(perguntas[2], resposta[2])
        
  




