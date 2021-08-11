import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const query = req.query.title || "%"
      const sort = req.query.sort === "title" ? "title" :"created_At"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 10

      const offset: number=10*(page -1)

      const result = await connection("aula49_recipes")
      .where("title", "LIKE", `%${query}%`)
      .orWhere("description", "LIKE",`%${query}%` )
      .orderBy(sort, order)
      .limit(10)
      .offset(10)

      const recipes = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}