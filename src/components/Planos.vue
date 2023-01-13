<template>
  <div>
    <div class="container marketing">
      <div class="row cards">
        <div class="card">
          <img src="../assets/product.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/product.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/product.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/product.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
      </div>
      <hr class="featurette-divider">
    </div>
  </div>
</template>

<style scoped>
img{
    width: 5rem;
}
.cards{
  display: flex;
  justify-content: space-around;
}
.card{
  max-width: 15rem;
  text-align: center;
  padding: 2rem 0;
  border: none;

  transition: 200ms;
}
.card:hover{
  box-shadow: 0 0 0 0.1rem rgba(178, 178, 178, 0.444);
  transform: translateY(-0.5rem);
}
.card:hover .card-body a{
  display: block;
}
.card-body a{
  display: none;
}
.card img{
  margin-left: auto;
  margin-right: auto;
}
</style>