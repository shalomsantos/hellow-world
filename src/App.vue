<template>
  <div>
    <router-view />
    <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="endereco in enderecos">
                    <td>{{ endereco.id }}</td>
                    <td>{{ endereco.name }}</td>
                    <td>{{ endereco.email }}</td>
                </tr>
            </tbody>
      </table>
  </div>
</template>

<script>
import Endereco from './services/endereco';

export default {
  data(){
        return{
            enderecos: []
        }
    },
  mounted(){
    Endereco.listar().then(resposta => {
      this.enderecos = resposta.data
    })
  }
}
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body::-webkit-scrollbar{
  background: transparent;
  border-radius: 2rem;
  width: 0.8rem;
}
body::-webkit-scrollbar-thumb{
  background: rgba(203, 203, 203, 0.619);
  border-radius: 2rem;
}
</style>
