<template>
  <div class="content">
    <header>
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
                <router-link class="nav-link active" to="/about" aria-current="page">Produtos</router-link>
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
    </header>
    <main>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
            ria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style="width: 100%;" src="../assets/back1.svg" />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Titulo 1</h1>
                <p>Some representative placeholder content for the first slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary " href="#">Entrando na fila</a></p>
                      {{ message }}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img style="width: 100%;" src="../assets/back2.svg" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Titulo 2</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Saiba Mais</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img style="width: 100%;" src="../assets/back3.svg" />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Titulo 3</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Pesquise na Galeria</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  
      <div class="container marketing">
        <div class="row cards">
          <div class="col-lg-4 card">
            <img width="40%" src="../assets/product.png" />
            <h2 class="fw-normal">Plano 1</h2>
            <p>Conteudo sobre plano um: referente a regra a ser implementada futuramente</p>
            <p class="but"><a class="btn btn-secondary" href="#">Contratar &raquo;</a></p>
          </div>
          <div class="col-lg-4 card">
            <img width="40%" src="../assets/product.png" />
            <h2 class="fw-normal">Plano 2</h2>
            <p>Conteudo sobre plano um: referente a regra a ser implementada futuramente</p>
            <p class="but"><a class="btn btn-secondary" href="#">Contratar &raquo;</a></p>
          </div>
          <div class="col-lg-4 card">
            <img width="40%" src="../assets/product.png" />
            <h2 class="fw-normal">Plano 3</h2>
            <p>Conteudo sobre plano um: referente a regra a ser implementada futuramente</p>
            <p class="but"><a class="btn btn-secondary" href="#">Contratar &raquo;</a></p>
          </div>
        </div>
        <hr class="featurette-divider">
  
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-muted">It’ll blow
                your mind.</span></h2>
            <p class="lead">
              Some great placeholder content for the first featurette here. Imagine some exciting prose here.
            </p>
          </div>
          <div class="col-md-5">
            <img class="img" src="../assets/image1.jpg" />
          </div>
        </div>
        <hr class="featurette-divider">
  
        <div class="row featurette">
          <div class="col-md-7 order-md-2" style="text-align: right; width: 53%; margin-left: auto;">
            <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good.
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this
              layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="img" src="../assets/image2.jpg" />
          </div>
        </div>
        <hr class="featurette-divider">
  
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">And lastly, this one.
              <span class="text-muted">Checkmate.</span>
            </h2>
            <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really
              intended to be actually read, simply here to give you a better view of what this would look like with
              someactual content. Your content.</p>
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
              <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span
                  class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really
                intended to be actually read, simply here to give you a better view of what this would look like with some
                actual content. Your content.</p>
            </div>
            <div class="col-lg-4">
              <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span
                  class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really
                intended to be actually read, simply here to give you a better view of what this would look like with some
                actual content. Your content.</p>
            </div>
            <div class="col-lg-4">
              <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span
                  class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really
                intended to be actually read, simply here to give you a better view of what this would look like with some
                actual content. Your content.</p>
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
<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    message
  },
  methods:{
    message: function (e){
      e.preventDefault();
      debugger;
      conssole.log("hellow")
    }
  }
}
</script>
