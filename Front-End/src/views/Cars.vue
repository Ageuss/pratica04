<template>
  <div id="app">
    <div class="cars">
      <h2>Desenvolvimento de Software para Web</h2>
      <br />
      <form action="">  
        <h3>Cadastrar Carros no Sistema</h3>
        
        <div id="alinhamento1">
          <label>Id:</label>
          <input type="int" v-model="id" />
        </div>

        <div id="alinhamento2">
          <label>Nome:</label>
          <input type="text" v-model="nome" />
        </div>

        <div id="alinhamento3">
          <label>Marca:</label>
          <input type="text" v-model="marca" />
        </div>

        <div id="alinhamento4">
          <label>Ano de Fabricação:</label>
          <input type="int" v-model="anoFab" />
        </div>

        <div id="alinhamento5">
          Ano de Modelo:
          <input type="int" v-model="anoModel" />
        </div>

        <div id="alinhamento6">
          Data de Venda:
          <input type="date" v-model="dataV" />
        </div>
        <div id="alinhamento7">
          Quantidade:
          <input type="int" v-model="quantidade" />
        </div>
      </form>

      <button @click="postCar">Post</button>
      <button @click="fetchCars">Get All</button>
      <button @click="fetchCarById">Get By Id</button>>
      <button @click="deleteCarById">Delete</button>
      <button @click="putCar">Put</button>

      <button @click="fetchCarByCargo">Filtrar por marca</button>
      <button @click="fetchCarByQuantidade">Filtrar por quantidade</button
      ><br /><br />

      <h3>
        Listagem dos carros cadastrados | Filtragem por marca | Filtragem por
        quantidade
      </h3>
      <ul>
        <li v-for="car in cars" :key="car.id">
          <p><strong>Id: </strong>{{ car.id }}</p>
          <p><strong>Nome: </strong>{{ car.nome }}</p>
          <p><strong>marca: </strong>{{ car.marca }}</p>
          <p><strong>Ano de Fabricação: </strong>{{ car.anoFab }}</p>
          <p><strong>Ano de Modelo: </strong>{{ car.anoModel }}</p>
          <p><strong>Data de Venda: </strong>{{ car.dataV }}</p>
        </li>
      </ul>

      <h3>Listagem por Id | Carros Inseridos | Atualizados</h3>
      <ul>
        <li>
          <p><strong>Id: </strong>{{ car.id }}</p>
          <p><strong>Nome: </strong>{{ car.nome }}</p>
          <p><strong>Marca: </strong>{{ car.marca }}</p>
          <p><strong>Ano de Fabricação: </strong>{{ car.anoFab }}</p>
          <p><strong>Ano de Modelo: </strong>{{ car.anoModel }}</p>
          <p><strong>Data de Venda: </strong>{{ car.dataV }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "Cars",
  data() {
    return {
      id: 0,
      nome: "",
      marca: "",
      anoFab: "",
      anoModel: "",
      quantidade: "",
      car: {},
      cars: [],
      baseURI: "http://localhost:8080/api/",
    };
  },
  methods: {
    fetchCars: function() {

      axios.get(this.baseURI + "pegarTodos", {
        headers: {"Access-Control-Allow-Origin": "*"}
      }).then((result) => {
        this.cars = result.data;
      });
    },
    fetchCarByQuantidade: function() {
      axios
        .get(this.baseURI + "?quantidade=" + this.quantidade)
        .then((result) => {
          this.cars = result.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    fetchCarByMarca: function() {
      axios
        .get(this.baseURI + "?marca=" + this.marca)
        .then((result) => {
          this.cars = result.data;
          console.log(result.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    fetchCarById: function() {
      axios
        .get(this.baseURI + "/" + this.id)
        .then((result) => {
          this.car = result.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    postCar: function() {
      axios
        .post(this.baseURI + "/add", {
          nome: this.nome,
          marca: this.marca,
          anoFab: this.anoFab,
          anoModel: this.anoModel,
          dataV: this.dataV,
        })
        .then((result) => {
          console.log(result);
          this.car = result.data;
        });
    },
    putCar: function() {
      let obj = {
        nome: this.nome,
        marca: this.marca,
        anoFab: this.anoFab,
        anoModel: this.anoModel,
        dataV: this.dataV
      };

      axios.put(this.baseURI + "/" + this.id, obj).then((result) => {
        console.log(result);
        this.car = result.data;
      });
    },
    deleteCarById: function() {
      axios.delete(this.baseURI + "/" + this.id).then((result) => {
        console.log(result.status);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f1efef;
}

#alinhamento1 input {
  margin-left: 150px;
  margin-bottom: 20px;
}

#alinhamento2 input {
  margin-left: 120px;
  margin-bottom: 20px;
}

#alinhamento3 input {
  margin-left: 120px;
  margin-bottom: 20px;
}

#alinhamento4 input {
  margin-left: 30px;
  margin-bottom: 20px;
}

#alinhamento5 input {
  margin-left: 50px;
  margin-bottom: 20px;
}

#alinhamento6 input {
  margin-left: 50px;
  margin-bottom: 20px;
}

#alinhamento7 input {
  margin-left: 80px;
  margin-bottom: 50px;
}

input {
  margin-left: 43px;
  border-radius: 4px;
  width: 200px;
  height: 25px;
}

button {
  margin: 5px;
}

ul {
  background: teal;
  margin: 0px 500px 0 500px;
  border-radius: 10px;
}

ul li {
  list-style: none;
}

ul li {
  padding: 20px;
}

form {
  background: teal;
  margin: 0px 450px 50px 450px;
  border-radius: 10px;
}

form h3{
  color: #2c3e50;
  padding: 50px;
}

h2,
h3 {
  color: #2c3e50;
}

#user,
#listagem {
  color: #2c3e50;
}

</style>
