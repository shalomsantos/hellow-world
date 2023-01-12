<template>
  <div class="content">
    <header>
      <Nav msg="naviagtion"></Nav>
    </header>
    <main>
      <Carousel msg="carousel"></Carousel>

      <Planos/>

      <div class="demos">
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
.demos{
  padding: 3.5rem 2rem;
}

.img{
  width: 100%;
}
</style>
