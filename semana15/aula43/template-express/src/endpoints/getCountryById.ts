import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

//tipagem - criando endpoints lista para filtrar por id
export const getCountryById = (
    req: Request,
    res: Response
    // void pq não tem return / não retorna nada
): void => {

    // console.log(req.headers, req.query)
    // Devolver 1 objeto
    const result: country | undefined = countries.find(
        country => country.id.toString() === req.params.id
    )
    if (result) {

        res.send(result || "Não encontrado")
    } else {
        res.statusCode = 404
        res.end()
    }

}