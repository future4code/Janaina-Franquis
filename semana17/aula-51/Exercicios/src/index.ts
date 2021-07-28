import { app } from "./app"
import  { getAllAdresses }  from "./endpoints/getAllAdresses"


app.get ('/address', getAllAdresses)