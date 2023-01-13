<template>
    <div>
        <div class="central">
            <div id="goBack">
                <router-link to="/home">
                    <i class="fa-solid fa-arrow-left"></i>
                </router-link>
            </div>
        
            <h1>Login</h1>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" id="usuario" v-model="usuario" name="name" placeholder="Username" class="form-control"
                    aria-label="Username" aria-describedby="basic-addon1">
            </div>
        
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">#</span>
                <input type="password" id="senha" v-model="senha" name="senha" placeholder="Password" class="form-control"
                    aria-label="Password" aria-describedby="basic-addon1">
            </div>
            
            <button class="btn btn-outline-primary" v-on:click="validantionLogin">
                Entrar
            </button>
        
            <button class="btn btn-outline-secondary" v-on:click="cadastrarUser">
                Cadastrar
            </button>
        </div>
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
import Endereco from '../services/endereco';

export default {
    nome: 'Login',
    data () {
        return {
            usuario: '',
            senha: '',
            enderecos: []
        }
    },
    methods: {
        validantionLogin (){
            if(this.usuario == 'admin'){
                if(this.senha == 'admin'){
                    this.$router.push('/home')
                }else{
                    alert('senha precisa ser igual o nome')
                }
            }else{
                alert('nome deve se admin')
            }
        },
        cadastrarUser(){
            this.$router.push('/cadastrar')
        }
    },
    mounted() {
        Endereco.listar().then(resposta => {
            this.enderecos = resposta.data
        })
    }
}

</script>

<style scoped>
.central {
    position: relative;
    
    display: flex;
    flex-direction: column;
    
    max-width: 30rem;
    margin: 1.5rem auto 1rem auto;
    border-radius: 0.5rem;
    padding: 4rem 10rem 4rem 4rem;
    box-shadow: 0 0.5rem 1rem 0.3rem rgba(125, 125, 125, 0.467)
}

input {
    outline: none;
}

button {
    margin: 0.5rem 0;
}

#goBack {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 1rem;
    left: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: rgba(216, 216, 216, 0.533);
    transition: 200ms;
}

#goBack:hover {
    background: rgba(232, 232, 232, 0.533);
}

.central h1{
    position: absolute;
    top: 5.5rem;
    right: -6.3rem;
    z-index: -1;

    font-size: 8rem;
    color: #2c3e5021;
    transform: rotate(90deg);
}
</style>