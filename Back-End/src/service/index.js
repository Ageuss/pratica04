class CarroService {
    constructor() {
        this.carros = [];
        this.id = 0;
    }


    criar(carro) {
        this.id++;
        carro.id = this.id;
        this.carros.push(carro);
    }

    pegarTodos() {
        return this.carros;
    }

    pegarPorId(id) {
        return this.carros.find((carro) => carro.id == id);
    }

    Marca(brand) {
        return this.carros.find((carro) => carro.marca == brand);
    }

    atualizar(id, carro) {
        this.carros.forEach(function (e) {
            if (id && id == e.id) {
                for (var i in carro) {
                    e[i] = carro[i];
                }
            }
        });
    }

    apagar(id) {
        this.carros = this.carros.filter(function (el) {
            return el.id != id;
        });
    }

}

module.exports = CarroService