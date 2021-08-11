const multiplicarPor15 = (num: number) => num * 15


export type carro = {
    marca: string,
    volumeDoTaque: number,
    temMotorFlex: boolean,
    calcularAutonomia : (combustivelRestante: number) => number // tipagem de callback
}


const mustang: carro = {
    marca: "Ford",
    volumeDoTaque: 61,
    temMotorFlex: false,
    calcularAutonomia: multiplicarPor15
   
}

const gol: carro = {
    marca: "VolksWagem",
    volumeDoTaque: 55,
    temMotorFlex: true,
    calcularAutonomia: multiplicarPor15
}

const onix: carro = {
    marca: "General Motors",
    volumeDoTaque: 60,
    temMotorFlex: true,
    calcularAutonomia: multiplicarPor15
}

// criar array

export const garagem: carro[]=  [mustang, gol, onix]