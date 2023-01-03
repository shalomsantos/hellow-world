<template>
    <div class="central">
        <div id="goBack">
            <router-link to="/">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <h1>Login</h1>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" v-model="user" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">#</span>
            <input type="password" v-model="pass" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
        </div>
        <button type="button" class="btn btn-outline-primary" v-on:click="verificacaoDeLogin">Entrar</button>
        <button type="button" class="btn btn-outline-secondary">Cadastrar</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        verificacaoDeLogin: function () {
            try {
                if (this.user == 'admin') {
                    if (this.pass == 'admin'){
                        alert('Parabéns você logou corretamente!')
                    }else{
                        alert('Senha precisa ser igual ao nome')
                    }
                }else{
                    alert('Usuário deve ser admin')
                }
            } catch (error) {
                alert('Error, Catch acionado')
                console.log(error)
            }
        }
    }
}
</script>

<style scope>
.central{
    display: flex;
    flex-direction: column;
    position: relative;
    
    max-width: 22rem;
    margin-left: auto;
    margin-right: auto;

    padding: 4rem 3rem;
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
    right: 1rem;
    
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
</style>