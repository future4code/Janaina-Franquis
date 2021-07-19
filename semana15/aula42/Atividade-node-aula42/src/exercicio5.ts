//5.A
const fazerContas = (numero1: number, numero2: number) => {
    const soma: number = numero1 + numero2
    const subtracao: number = numero1 - numero2
    const multiplicacao: number = numero1 * numero2
    if (numero1 > numero2) {
        return console.log(`Soma: ${soma}, subtracao: ${subtracao}, multiplicacao: ${multiplicacao}, Maior número: ${numero1}`)
    } else if (numero2 > numero1)
        return console.log(`Soma: ${soma}, subtracao: ${subtracao}, multiplicacao: ${multiplicacao}, Maior número: ${numero2}`)
    else {
        return (`Soma: ${soma}, subtracao: ${subtracao}, multiplicacao: ${multiplicacao}, Número iguais`)

    }
}
fazerContas(25, 55)