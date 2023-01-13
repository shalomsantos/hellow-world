<template>
  <div>
    <div class="container marketing">
      <div class="row cards">
        <div class="card">
          <div class="fundo">
          </div>
          <div class="card-body">
            <h1>Produto 1</h1>
            <p class="card-text">Algum texto de exemplo rápido para criar no título do cartão e compor a maior parte do conteúdo do cartão.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <div class="fundo">
          </div>
          <div class="card-body">
            <h1>Produto 2</h1>
            <p class="card-text">Algum texto de exemplo rápido para criar no título do cartão e compor a maior parte do conteúdo do cartão.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <div class="fundo">
          </div>
          <div class="card-body">
            <h1>Produto 3</h1>
            <p class="card-text">Algum texto de exemplo rápido para criar no título do cartão e compor a maior parte do conteúdo do cartão.
            </p>
            <a class="btn btn-outline-dark" href="#">Contratar</a>
          </div>
        </div>
        <div class="card">
          <div class="fundo">
          </div>
          <div class="card-body">
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
img{
    width: 5rem;
}
.fundo{
  display: flex;
  background: #4FC8EC;
  height: 10rem;
}
.cards{
  display: flex;
  justify-content: space-around;
}
.card{
  overflow: hidden;
  max-width: 15rem;
  border: 0.1rem solid rgba(206, 206, 206, 0.382);
  padding: 0;

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
</style>