//EXERCÍCIO 2
const operacao = (process.argv[2]);
const number1 = Number(process.argv[3])

switch (operacao) {
    case "add":
        return console.log(`Resposta: ${number1 + 2}`)
    case "sub":
        return console.log(`Resposta: ${number1 - 2}`)
    case "mult":
        return console.log(`Resposta: ${number1 * 2}`)
    case "div":
        return console.log(`Resposta: ${number1 / 2}`)
    default:
        break;
}