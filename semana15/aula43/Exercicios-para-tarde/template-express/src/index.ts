import { app } from './app'

import { getAllCountries } from './Endpoints/gellAllCoutries'
import { getCountryById } from './Endpoints/getCountryById'


app.get("/countries", getAllCountries) //app.method(path,handler)
app.get("/countries/:id", getCountryById)
