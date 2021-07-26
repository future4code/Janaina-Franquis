import { app } from './app';
import connection from './passaword/connection';

app.get("/user", async (req, res) => {
    try {
        const result = await connection.raw(`
        SELECT * FROM Actor
        `)
       

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);

    }
})


//requisição 
app.post("/actor", async (req, res) => {
    try {
        await connection.raw(`
        INSERT INTO Actor
            (id, name, salary, birth_date, gender)
            VALUES (
            ${Date.now().toString()}, 
            "${req.body.name}",
            ${req.body.salary},
            "${req.body.birth_date}",
            "${req.body.gender}"
            );        
        `)

        res.status(200).send("Dados enviados")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message);

    }
})

//requisição para atualizar

app.put('/actor/:id', async (req, res) => {
    try {
        await connection("Actor")
            .update({
                name: req.body.name,
                salary: req.body.salary,
                birth_date: req.body.birth_date,
                gender: req.body.gender
            })
            .where({ id: req.params.id })
        res.send("Dados atualizados!")
    } catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})

// requisição para deletar
app.delete('/actor/:id', async (req, res) => {
    try {
        await connection("Actor")
        .delete()
        .where({id: req.params.id})
        
        res.send("Dado deletado com sucesso!")

    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.sqlMessage || error.message);
    }
})
