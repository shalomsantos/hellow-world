<template>
    <div class="central">
        <form class="row g-3">
            <div id="goBack">
                <router-link to="/">
                    <i class="fa-solid fa-arrow-left"></i>
                </router-link>
            </div>
            <h1>Cadastre-se</h1>
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Usuário</label>
                <input
                    type="email"
                    v-model="usuario"
                    name="usuario"
                    id="usuario"
                    class="form-control">
            </div>
            <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Senha</label>
                <input
                    type="password"
                    v-model="senha"
                    name="senha"
                    id="senha"
                    class="form-control">
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Endereço</label>
                <input
                    type="text"
                    v-model="endereco"
                    id="endereco"
                    placeholder="rua, numero"
                    class="form-control">
            </div>
            <div class="col-md-4">
                <label for="inputCity" class="form-label">CEP</label>
                <input
                    type="text"
                    v-model="cep"
                    id="cep"
                    placeholder="__-___-___"
                    class="form-control">
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">Cidade</label>
                <input
                    type="text"
                    v-model="cidade"
                    id="cidade"
                    class="form-control">
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">Estado</label>
                <select
                    name="estado"
                    id="estado"
                    v-model="estado"
                    class="form-select">
                    <option selected>Selecione...</option>
                    <option>valor</option>
                </select>
            </div>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-success">Cadastrar</button>
                <button type="reset" class="btn btn-secondary" v-on:click="btnLimpar">Limpar</button>
            </div>
        </form>
    </div>

</template>

<script>
export default {
    nome: 'Cadastrar',
    data () {
        return {
            usuario: '',
            senha: '',
            endereco: '',
            cep: '',
            cidade: '',
            estado: ''
        }
    },
    methods: {
        btnLimpar(){
            this.usuario.value = '';
            this.senha.value = '';
            this.endereco.value = '';
            this.cep.value = '';
            this.cidade.value = '';
            this.estado.value = '';
        }
    }
}
</script>

<style scoped>
.central{
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}
form{
    max-width: 40rem;
    max-height: max-content;
    position: relative;
    
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem 0.3rem rgba(125, 125, 125, 0.467);
    padding: 0 2rem 1rem 2rem;
}
h1{
    text-align: right;
}
#goBack {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 0;
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
</style>