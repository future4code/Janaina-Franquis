import {carro, garagem} from './exercicio3'
import {MARCAS_DE_CARROS} from './exercicio6'


function buscarCarrosPorMarca(frota:
    carro[],
    marca?: MARCAS_DE_CARROS
    ) : carro[] {
    if (marca === undefined) {
        return frota
    }
    return frota.filter(
        (carro: carro) => {
            return carro.marca === marca
        }
    )
}
console.log(buscarCarrosPorMarca(garagem, MARCAS_DE_CARROS.FORD))