// //A. acessados no código pela propriedade process.argv[2] e chamar a variavel atribuida no console.log .

// //B.
// const nome = "Janaina";
// const age = 39;
// console.log(`Olá  ${nome}!  Você tem  ${age} anos.`);

// //C.
// const number = Number("7")
// console.log(`Olá  ${nome}!  Você tem  ${age} anos. Em sete anos você terá   ${number+age}`);

//EXERCÍCIO 2
// const operacao = (process.argv[2]);
// const number1 = Number(process.argv[3])

// switch (operacao) {
//     case "add":
//         return console.log(`Resposta: ${number1 + 2}`)
//     case "sub":
//         return console.log(`Resposta: ${number1 - 2}`)
//     case "mult":
//         return console.log(`Resposta: ${number1 * 2}`)
//     case "div":
//         return console.log(`Resposta: ${number1 / 2}`)
//     default:
//         break;
// }

//EXERCÍCIO 3
const listaDeTarefas = ["Ir ao banco", "Lavar Roupa, Lavar louça, Comprar leite"]
console.log("Tarefa adicionada com sucesso!")
listaDeTarefas.push(process.argv[2])
console.log(listaDeTarefas)


