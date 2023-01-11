<template>
  <div class="container">
        <div class="cards">
            <img src="../assets/product.png">
            <div class="bodingCards">
                <h1>produto a </h1>
                <p>descrição do produto, descrição do produto segundo fluxo de Teste</p>
                <button class="product">comprar</button>
            </div>
        </div>
        <div class="cards">
            <img src="../assets/product.png">
            <div class="bodingCards">
                <h1>produto b </h1>
                <p>descrição do produto, descrição do produto segundo fluxo de Teste</p>
                <button class="product">comprar</button>
            </div>
        </div>
        <div class="cards">
            <img src="../assets/product.png">
            <div class="bodingCards">
                <h1>produto c </h1>
                <p>descrição do produto, descrição do produto segundo fluxo de Teste</p>
                <button class="product">comprar</button>
            </div>
        </div>
        <div class="cards">
            <img src="../assets/product.png">
            <div class="bodingCards">
                <h1>produto d </h1>
                <p>descrição do produto, descrição do produto segundo fluxo de Teste</p>
                <button class="product">comprar</button>
            </div>
        </div>
  </div>
  <!-- <div class="container marketing">
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
  </div> -->
</template>
<script>
export default {
  name: 'Planos',
  props: {
    msg: String
  }
}
</script>

<style scoped>
img{
    width: 5rem;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.cards {
  position: relative;
  text-align: center;
  margin: 0 1rem;
  background: rgba(186, 186, 186, 0.286);
  padding: 3rem 1.5rem;
  border-radius: 0.5rem;
  transition: 300ms;
}
.cards:hover {
  transform: scale(1.04);
}
.product{
  position: absolute;
  left: 0;
  bottom: -1rem;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
}
.bodingCards {
  text-align: center;
}

@media only screen and (max-width: 980px) {
  body {
    height: 100%;
  }

  .container {
    flex-direction: column;
  }

  .cards {
    max-width: 35rem;
    display: flex;
    justify-content: space-around;
    gap: 3rem;
    margin: 1rem;
  }
}
</style>
