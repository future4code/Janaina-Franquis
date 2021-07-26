import { Request, Response } from "express"
import { filterUser } from '../query/filterUser';



/* Filtro por usuário */

export const getUserName = async(req: Request, res: Response): Promise<void> =>{
    try {
       const name = req.query.name
       const user = await filterUser(name) as string

       if(!user.length) {
          res.statusCode = 404
          res.send("Erro - Nenhum usuário encontrado ")
       }
       res.status(200).send(user)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }