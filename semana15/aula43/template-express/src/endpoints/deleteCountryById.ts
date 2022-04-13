import { Request, Response } from "express"
import { countries } from "../data"

export const deleteCountryById = (
    req: Request,
    res: Response
) : void => {
    // authorization code
    if(req.headers.authorization !== "tokenabc123"){
        return res.status(401).end()


    }

    const index: number = countries.findIndex(
        country => country.id === Number(req.params.id)
    )
        //deletar um elemento
        countries.splice(index, 1)

        res.status(204).end()
    

}