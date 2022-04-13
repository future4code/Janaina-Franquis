import { MARCAS_DE_CARROS } from "./exercicio6"

export type carro = {
    marca: MARCAS_DE_CARROS
    volumeDoTaque: number,
    temMotorFlex: boolean,
}


const mustang: carro = {
    marca: MARCAS_DE_CARROS.FORD,
    volumeDoTaque: 61,
    temMotorFlex: false
}

const gol: carro = {
    marca: MARCAS_DE_CARROS.VOLKSWAGEM,
    volumeDoTaque: 55,
    temMotorFlex: true
}

const onix: carro = {
    marca: MARCAS_DE_CARROS.GENERAL_MOTORS,
    volumeDoTaque: 60,
    temMotorFlex: true
}

// criar array

export const garagem: carro[]=  [mustang, gol, onix]