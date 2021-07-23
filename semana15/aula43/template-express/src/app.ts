// configuração do express (Servidor)

import express, { Express } from 'express'
import cors from 'cors'

export const app: Express = express()
app.use(express.json())
app.use(cors())



//endpoint de teste
app.get("/", (req, res) => {
    res.send("Hello from Express! =)") 
})

// porta para o servidor executar, usar callback para sinalizar que  a aplicação está pronta.
app.listen(3003, () => {
    console.log("Server is running!! ")
})