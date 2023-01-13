<template>
  <div class="content">
    <header>
      <Nav msg="naviagtion"></Nav>
    </header>
    <main>
      <Carousel msg="carousel"></Carousel>

      <Planos/>

      <div class="demostration">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              Título do primeiro featurette.<span class="text-muted"> Isso vai explodir sua mente.</span></h2>
            <p class="lead">
              Algum ótimo conteúdo de espaço reservado para o primeiro featurette aqui. Imagine uma prosa emocionante aqui.
            </p>
          </div>
          <div class="col-md-5">
            <img class="img" src="../assets/image1.jpg" />
          </div>
        </div>
        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">Oh sim, é tão bom.
              <span class="text-muted"> Veja por si mesmo.</span>
            </h2>
            <p class="lead">Outro recurso? É claro. Mais conteúdo de espaço reservado aqui para dar uma ideia de como esse layout funcionaria com algum conteúdo real do mundo real.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="img" src="../assets/image2.jpg" />
          </div>
        </div>
        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">E por último, este. 
              <span class="text-muted">Xeque-mate.</span>
            </h2>
            <p class="lead">E sim, este é o último bloco de conteúdo de espaço reservado representativo. Novamente, não é realmente para ser lido, apenas aqui para dar a você uma visão melhor de como isso ficaria com algum conteúdo real. Seu conteúdo.</p>
          </div>
          <div class="col-md-5">
            <img class="img" src="../assets/image3.jpg" />
          </div>
        </div>
        <hr class="featurette-divider">
      </div>

      <footer class="container">
        <div class="container marketing">
          <div class="row">
            <div class="col-lg-4">
              <h2 class="featurette-heading fw-normal lh-1">E por último, este. <span
                  class="text-muted">Xeque-mate.</span>
              </h2>
              <p class="lead">E sim, este é o último bloco de conteúdo de espaço reservado representativo. Novamente, não se destina a ser realmente lido, apenas aqui para dar a você uma visão melhor de como isso ficaria com algum conteúdo real. Seu conteúdo.</p>
            </div>
            <div class="col-lg-4">
              <h2 class="featurette-heading fw-normal lh-1">E por último, este. <span
                  class="text-muted">Xeque-mate.</span>
              </h2>
              <p class="lead">E sim, este é o último bloco de conteúdo de espaço reservado representativo. Novamente, não se destina a ser realmente lido, apenas aqui para dar a você uma visão melhor de como isso ficaria com algum conteúdo real. Seu conteúdo.</p>
            </div>
            <div class="col-lg-4">
              <h2 class="featurette-heading fw-normal lh-1">E por último, este. <span
                  class="text-muted">Xeque-mate.</span>
              </h2>
              <p class="lead">E sim, este é o último bloco de conteúdo de espaço reservado representativo. Novamente, não se destina a ser realmente lido, apenas aqui para dar a você uma visão melhor de como isso ficaria com algum conteúdo real. Seu conteúdo.</p>
            </div>
          </div>
        </div>
        <hr class="featurette-divider">
      </footer>
  
      <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
    </main>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Planos from '@/components/Planos.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Planos,
    Carousel
  }
}
</script>
<style scoped>
.demostration{
  padding: 3.5rem 2rem;
}
.demostration .row{
  align-items: center;
}
.img{
  width: 100%;
}
</style>
