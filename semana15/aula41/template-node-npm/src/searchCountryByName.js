const countries = require('./countries')

const search = process.argv[2]

//filter recebe como argumento uma callback
//includes: incluir termo de buscar(search) a variavel que esta no terminal.
const result = countries.filter(
    (country) => {return country
        .name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())}) 

console.table(result)