//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

// 1) a. false
//    b. false
//    c. verdadeiro 
//    d. boolean

// 2) a. undefined
//    b. undefined
//    c. 11
//    d. Array não definido
//    e. 

// //1 - EXERCICIO DE ESCRITA DE CÓGIGO
// // Faça um programa que:
// // a. Pergunte a idade do usuário.
//       const idadeUsuario = Number(prompt ("Qual a sua idade?"));
//       console.log(idadeUsuario)

// // b. Pergunte a idade do seu melhor amigo ou amiga
//        const idadeAmigos = Number(prompt ("Qual a idade do seu melhor ou da sua amiga"));
//        console.log(idadeAmigos)

// // c. Imprima na tela a seguinte mensagem:"Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta(true ou false)
//        const idadeMaior = idadeUsuario > idadeAmigos
//        const mensagem = `Sua idade é maior do que a do seu melhor amigo?  ${idadeMaior}`
//        console.log(alert(mensagem))

// // d. Imprima na tela a diferença de idade.
//       const diferencaIdade = Number(idadeUsuario) - Number(idadeAmigos)
//       console.log(alert(`A diferença de idade entre você é de ${diferencaIdade}`) )


// 2 - Faça um programa que:
//     a. Peça ao usuário que insira um numero par.
          const numeroPar = (prompt("Insira um numero PAR"));
          const total =  Number(numeroPar) % 2;
          //console.log(alert(`${total}`));

//     b. Imprimir na tela do resto da divisão desse numero por 2
          const resultado = total % 2
          console.log(alert(`O resto da divisão é ${resultado}`))

//     c. Teste o programa com diversos numero pares. Escreva um comentário do código.
          //Retorna sempre 0

//     d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
          //Retorna sempre 1

// 3 - Faça um programa, seguindo os passos:
//      a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
           const listaDeTarefas = [];
           

//      b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
           const Tarefa1 = prompt("Insira a primeira tarefa do seu dia!")
           const Tarefa2 = prompt("Insira a segunda tarefa do seu dia!")
           const Tarefa3 = prompt("Insira a terceira tarefa do seu dia!") 

           listaDeTarefas.push(tarefa1)
           listaDeTarefas.push(tarefa2)
           listaDeTarefas.push(tarefa3)
           

//      c. Imprima o array na tela.
           console.log(alert(listaDeTarefas))

//      d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
            const usuarioRealizou = Number(prompt("Digite o indice (0, 1 ou 2 ) de uma tarefa que já realizou"))
            


//      e. Remova da lista o item de índice que o usuário escolheu.
           listaDeTarefas.splice(usuarioRealizou)

//      f. Imprima o array na tela
           console.log(listaDeTarefas)


           