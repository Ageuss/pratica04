const {Router} = require("express")
const CarroController = require("../controller/index");
const routes = Router();

routes.post('/criarCarro/', CarroController.criar)
routes.get('/pegarTodos/', CarroController.pegarTodos)
routes.get('/pegarporId/:id', CarroController.pegarPorId)
routes.get('/marca/:marca', CarroController.marca)
routes.put('/atualizar/', CarroController.atualizar)
//routes.delete('/deletar/', CarroController.deletar)

module.exports = routes