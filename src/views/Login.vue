<template>
    <form @submit.prevent="submit()">
        <div id="goBack">
            <router-link to="/home">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>

        <h1 id="LogPanel">Login</h1>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input
                required
                type="text"
                placeholder="Username"
                class="form-control"
                v-model="form.usuario"
                aria-label="Username"
                aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">#</span>
            <input
                required
                type="password"
                placeholder="Password"
                class="form-control"
                v-model="form.senha"
                aria-label="Password" aria-describedby="basic-addon1">
        </div>

        <!-- v-on:click="" -->
        <button class="btn btn-outline-primary">
            Entrar
        </button>

        <button class="btn btn-outline-secondary">
            Cadastrar
        </button>
    </form>
</template>

<script>

export default {
    nome: 'Login',
    data: () => ({
        form: {
            usuario: '',
            senha: ''
        }
    }),
    methods: {
        submit(){
            console.log(this.form)
        },
        // verificacaoDeLogin: function () {
        //     try {
        //         if (this.usuario == 'admin') {
        //             if (this.senha == 'admin') {
        //                 alert('Parabéns você logou corretamente!')
        //             } else {
        //                 alert('Senha precisa ser igual ao nome')
        //             }
        //         } else {
        //             alert('Usuário deve ser admin')
        //         }
        //     } catch (error) {
        //         alert('Error, Catch acionado')
        //         console.log(error)
        //     }
        // }
    }
}
</script>

<style scope>
form{
    display: flex;
    flex-direction: column;
    position: relative;
    
    max-width: 30rem;
    margin-left: auto;
    margin-right: auto;

    padding: 4rem 10rem 4rem 4rem;
    box-shadow: 0 0.5rem 1rem 0.3rem rgba(125, 125, 125, 0.467)
}
input{
    outline: none;
}
button{
    margin: 0.5rem 0;
}
#goBack{
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
#goBack:hover{
    background: rgba(232, 232, 232, 0.533);
}
#LogPanel{
    position: absolute;
    top: 7rem;
    right: -6.3rem;
    z-index: -1;
    
    font-size: 8rem;
    color: #2c3e5021;
    transform: rotate(90deg);
}
</style>