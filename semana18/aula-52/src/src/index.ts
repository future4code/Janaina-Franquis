import app from "./app"
import createCharacter from "../src/endpoints/createCharacter"
import deleteCharacter from "../src/endpoints/deleteCharacter"
import getAllCharacters from "../src/endpoints/getAllCharacters"
import getCharacterById from "../src/endpoints/getCharacterById"

app.get("/character", getAllCharacters)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)
app.get("/character/:id", getCharacterById)

// app.get("/movie/:id/characters")

// app.get("/movies")
// app.delete("/movies")