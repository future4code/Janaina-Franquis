import {Request, Response} from "express"
import { countries } from "../data"

//tipagem - criando endpoints
export const getAllCountries = (
    req: Request, 
    res: Response 
    // void pq não tem return
): void => {

    console.log(req.headers, req.query)
    res.statusMessage = "Mensagem customizada"
    res.send(countries) // envia body de resposta

}