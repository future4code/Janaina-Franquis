import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

//tipagem - criando endpoints lista para filtrar por id
export const getRandomCountry = (
    req: Request,
    res: Response
    // void pq não tem return / não retorna nada
): void => {

    // console.log(req.headers, req.query)
    // Math com id do país
    const result: country | undefined = countries.find(
        country => country.id ===  Math.floor(Math.random() * 190)
    )

    console.log(result)

    if (result) {

        res.send(result || "Não encontrado")
    } else {
        res.statusCode = 404
        res.end()
    }

}