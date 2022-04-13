import app from "./app"
import getAllListPuerchasesUsers from "./endpoints/get/getAllListPuerchasesUsers"
import getListProducts from "./endpoints/get/getListProducts"
import getListPurchases from "./endpoints/get/getListPurchases"
import getListTrips from "./endpoints/get/getListTrips"
import getListUsers from "./endpoints/get/getListUsers"
import postCreateProduct from "./endpoints/post/postCreateProduct"
import postCreatePurchase from "./endpoints/post/postCreatePurchase"
import postCreateTrip from "./endpoints/post/postCreateTrip"
import postCreateUser from "./endpoints/post/postCreateUser"


// criar usuário, produto, viagem e compra
app.post('/user', postCreateUser)
app.post('/product', postCreateProduct)
app.post('/trip', postCreateTrip)
app.post('/purchase', postCreatePurchase)


//listar usuários, produtos, viagens e compras
app.get('/user', getListUsers)
app.get('/product', getListProducts)
app.get('/trip', getListTrips)
app.get('/purchase', getListPurchases)


//listar todas as compras de um usuário.
app.get('/purchases/:id', getAllListPuerchasesUsers)

