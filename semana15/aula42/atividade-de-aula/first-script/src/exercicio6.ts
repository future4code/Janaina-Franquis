export enum MARCAS_DE_CARROS {
    FORD = "Ford",
    GENERAL_MOTORS = "General Motors",
    VOLKSWAGEM = "Volkswagem",
    NISSAN = "Nissan"
}

const validarMarca = (
    marca: any
    ) => marca in MARCAS_DE_CARROS

    console.log(validarMarca("FORD"))

