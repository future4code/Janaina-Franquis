let userName: string = "Janaina"
let age : number | string = "38" // aceitar idade com nº e string 
//age = 8
let estuda : boolean = true

//console.log(typeof age) // string

let messages: string [] = [] // array vazio
let nomes : string [] = ["Janaina", "Ana", "Donna"] 
let numerosComponentes : number[] = [1,2,3,4,5,8]
var numerosDePessoas : (number|string) [] = [1, 2 , "3", "4"] // misturar nº e string com array

//console.log(nomes)
//console.log(numerosComponentes)

console.log(numerosDePessoas)

// esquelo que define as propriedades
type person = {
    name: string,
    age: number,
    address: string
}

const astrodev : person = {
    name: "Astrodev",
    age: 35,
    address: "Rua de Vênus",

}

console.log(astrodev)

// tipar funções

function sum (
    a: number, 
    b: number
    ) : number {
        return a + b
    }
