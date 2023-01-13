<template>
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
                <p><a class="btn btn-lg btn-outline-light " href="#">Entrando na fila</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img style="width: 100%;" src="../assets/back2.svg" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Titulo 2</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-outline-light" href="#">Saiba Mais</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img style="width: 100%;" src="../assets/back3.svg" />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Titulo 3</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a class="btn btn-lg btn-outline-light" href="#">Pesquise na Galeria</a></p>
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
</template>