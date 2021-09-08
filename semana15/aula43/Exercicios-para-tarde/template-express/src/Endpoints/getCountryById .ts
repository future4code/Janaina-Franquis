import {Request, Response} from "express"
import { countries } from "../data"

export const gellCountryById =(
    req: Request,
    res: Response,
    
) => {
    const result = countries.map((country: country) => {
        return { id: country.id, name: country.name };
      });

    
}

