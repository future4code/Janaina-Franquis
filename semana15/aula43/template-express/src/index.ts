import { app } from './app'
import { deleteCountryById } from './endpoints/deleteCountryById'
import { getAllCountries } from './endpoints/getAllCountries'
import { getCountryById } from './endpoints/getCountryById'
import { getRandomCountry } from './endpoints/getRandomCountry'

app.get("/countries", getAllCountries)
app.get("/countries/random", getRandomCountry) 
app.get("/countries/:id", getCountryById)
app.delete("/countries/:id", deleteCountryById)