/*//1.A - O tipo 'number' não pode ser atribuído ao tipo 'string'
// let minhaString : string = 15

//1.B 
let meuNumero: number | string = 10

//1.C 
//1.D
enum RAINBOW_COLORS {
    RED = "Red",
    ORANGE = "Orange",
    YELLOW = "Yellow",
    GREEN = "Green",
    BLUE = "Blue",
    PURPLE = "Purple",
    INDICO = "Indigo",
}


type person = {
    name: string,
    age: number,
    colorFav: RAINBOW_COLORS
}

const janaina: person = {
    name: "Janaina",
    age: 39,
    colorFav: RAINBOW_COLORS.PURPLE,
}

const ana: person = {
    name: "Ana",
    age: 43,
    colorFav: RAINBOW_COLORS.INDICO,
}

const cesar: person = {
    name: "Cesar",
    age: 37,
    colorFav: RAINBOW_COLORS.ORANGE,
}

//2. A.B.

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a: number, b:number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object  = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const arrTest: number[] = [1,10,15,20,12]
console.log(obterEstatisticas(arrTest))


//C. 
type amostraDeIdades = {
    numeros: number[]
    obterEstatisticas:(numeros:number[]) => number[]
} */

//3. A
type post = {
    autor: string
    texto: string
}

const posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

//B
function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}