<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><i class="fa-brands fa-centercode"></i></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/login" aria-current="page">Produtos</router-link>
              </li>
              <div id="barra"></div>
              <li class="nav-item">
                <router-link class="nav-link active" to="/about" aria-current="page">Planos</router-link>
              </li>
              <div id="barra"></div>
              <li class="nav-item">
                <router-link class="nav-link active" to="/about" aria-current="page">Serviços</router-link>
              </li>
              <div id="barra"></div>
              <li class="nav-item">
                <router-link class="nav-link active" to="/about" aria-current="page">Quem somos</router-link>
              </li>
              <div id="barra"></div>
              <li class="nav-item">
                <router-link class="nav-link active" to="/about" aria-current="page">Trabalhe conosco</router-link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>