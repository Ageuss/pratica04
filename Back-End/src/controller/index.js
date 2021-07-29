const CarroService = require("../service/index")
const Carro = require('../model/index')

const carroService = new CarroService();

exports.pegarTodos = (req,res) =>{
    res.send('sucess')
    //res.json(carroService.pegarTodos());
};
exports.criar = (req,res) =>{
    res.json(carroService.criar(new Carro(req.body.nome, req.body.marca, req.body.anoFabricacao, req.body.anoModelo, req.body.dataVenda)));
};
exports.pegarPorId = (req,res) =>{
    const {id} = req.params
    res.json(carroService.pegarPorId(id));
};
exports.marca = (req, res) =>{
    const {marca} = req.params
    res.json(carroService.marca(marca));
};
exports.atualizar = (req, res) =>{
    const {id, carro} = req.params
    //const carro = new Carro(req.body.nome, req.body.marca, req.body.anoFabricacao, req.body.anoModelo, req.body.dataVenda)

    res.json(carroService.atualizar(id, carro));
};
exports.Apagar = (req,res) =>{
    const {id} = req.params
    res.json(carroService.Apagar(id));
};


