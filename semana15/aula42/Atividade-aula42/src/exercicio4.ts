
type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}



//4.A BASTA DIGITAR O CÓDIGO TSC
//4.B NO ARQUIVO TSCONFIG.JSON PRECISA CONFIGURAR O rootDir para: rootDir"./src"
//4.C SIM. USANDO TSC
//4.D "target", "es6", "sourceMap", "outDir": "./build", "rootDir": "./src", "removeComments": true, "noImplicitAny": true 

