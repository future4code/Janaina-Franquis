type carro = {
    marca: string,
    volumeDoTaque: number,
    temMotorFlex: boolean,
}


const mustang: carro = {
    marca: "Ford",
    volumeDoTaque: 61,
    temMotorFlex: false
}

const gol: carro = {
    marca: "VolksWagem",
    volumeDoTaque: 55,
    temMotorFlex: true
}

const onix: carro = {
    marca: "General Motors",
    volumeDoTaque: 60,
    temMotorFlex: true
}

// criar array

const garagem: carro[]=  [mustang, gol, onix]