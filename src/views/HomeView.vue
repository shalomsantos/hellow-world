<template>
  <div class="content">
    <header>
      <Nav msg="naviagtion"></Nav>
    </header>
    <main>
      <Carousel msg="carousel"></Carousel>

      <Planos msg="planos"></Planos>

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
<script>

import HelloWorld from '@/components/Planos.vue'
import Nav from '@/components/Nav.vue'
import Carousel from '@/components/Carousel.vue'
import Planos from '@/components/Planos.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Nav,
    Carousel,
    Planos
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
