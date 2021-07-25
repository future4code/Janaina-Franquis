//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


//declaração de type (do user)
type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60
  }
]

//API 
//API GET que recebe as informações dos usuarios que quero pegar por query.params
app.get("/users", (req: Request, res: Response) => {
  let codeError: number = 400;  /* declarar status de erro */
  // lógica do endpoints
  // try, catch para pegar os erros que podem aparecer
  try {
    // o quero receber de informações que o usuario vai mandar 
    // busca por nome 
    const name: string = req.query.name as string // as string somente para o TS para de reclamar
    const user: User | undefined = users.find((user) => user.name === name) 
    if (!user) /* fazer verificação*/ {
      codeError = 404
      throw new Error("User not found")
    }
    res.status(200).send(user) //usuário encontrado 
  } catch (error: any) {

    res.status(codeError).send({ message: error.message })

  }
});



// procurar usuario por id pathParams
app.get("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const id: number = Number(req.params.id);

    if (isNaN(id)) {
      errorCode = 422; //unprocessable entity
      throw new Error("Invalid value for id. Please send a number.");
    }

    const user = users.find((user) => {
      return user.id === id;
    });

    if (!user) {
      errorCode = 404;
      throw new Error("User not found.");
    }

    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});



//criar novo item e editar lista de users
app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    //desestruturação
    const { id, name, email, type, age } = req.body;
     //verificação usuário passou dados correto
    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});


//atualizar usuário


app.patch("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User updated successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});



/*
// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})*/

// servidor para poder bater nos endpoints
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});