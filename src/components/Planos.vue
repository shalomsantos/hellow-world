<template>
  <div>
    <div class="container marketing">
      <div class="row cards">
        <div class="card">
          <div class="card-body">
            <img src="../assets/coracao.svg" alt="">
            <h1>Produto 1</h1>
            <p class="card-text">Algum texto de exemplo rápido para criar no título do cartão e compor a maior parte do conteúdo do cartão.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/coracao.svg" alt="">
            <h1>Produto 2</h1>
            <p class="card-text">Algum texto de exemplo rápido para criar no título do cartão e compor a maior parte do conteúdo do cartão.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/coracao.svg" alt="">
            <h1>Produto 3</h1>
            <p class="card-text">Algum texto de exemplo rápido para criar no título do cartão e compor a maior parte do conteúdo do cartão.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src="../assets/coracao.svg" alt="">
            <h1>Produto 4</h1>
            <p class="card-text">Algum texto de exemplo rápido para criar no título do cartão e compor a maior parte do conteúdo do cartão.
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
.cards{
  display: flex;
  justify-content: space-around;
}
.card::before{
  content: '';
  position: absolute;
  width: 150%;
  height: 50%;
  top: -5rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 70%;
  background: #37C6F4;
}
.card{
  overflow: hidden;
  position: relative;
  max-width: 15rem;
  border: 0.1rem solid rgba(172, 172, 172, 0.382);
  padding-bottom: 2rem;

  border-radius: 0.5rem;
  text-align: center;
  transition: 200ms;
}
.card:hover{
  transform: translateY(-0.3rem)
}
.card img{
  margin-left: auto;
  margin-right: auto;
}
.card-body p{
  text-align: justify;
}
.card-body img{
  width: 3rem;
  margin-bottom: 3rem;
}
.card-body{
  z-index: 2;
}
</style>