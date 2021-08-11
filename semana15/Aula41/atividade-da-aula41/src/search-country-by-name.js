const countries = require("./countries");

const searchCountry = process.argv[2];

const result = countries.filter(
  (country) => {
    return country.name
      .toLocaleLowerCase()
      .includes(searchCountry.toLocaleLowerCase());
  } // retorna uma condição
);

//console.log({countries, searchCountry}) // imprimiu 2 coisas  1º a lista de paises e 2º searchCountry com o termo a
console.table(result);
