/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let bemVindo = alert("Bem vindes ao jogo de BlackJack! ")
let inicio = confirm("Quer iniciar uma nova rodada?")
let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10 , "J" ,"Q" ,"K" ]
let naipes = ["Copas","Paus","Ouros", "Espadas"];
const sorteioDeCartas = console.log(cartas[Math.random(0, cartas.length)])

if (bemVindo === undefined){
   inicio;
   alert("Opa! Vamos ao jogo.")
} if (inicio === false){
   alert("O jogo acabou!")
} else {
   console.log ("")
}
