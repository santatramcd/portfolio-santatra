<template>
  <div>
    <div class="division">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active rounded-circle"
            style="width: 15px; height: 15px"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="rounded-circle"
            style="width: 15px; height: 15px"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="rounded-circle"
            style="width: 15px; height: 15px"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://media.lenouvelliste.ch/media/image/105/big_16_9/robot.jpg"
              class="d-block w-100"
              style="height: 80vh"
              alt="..."
            />
            <div class="carousel-caption top-0 d-block">
              <h1>First slide label</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.talkwalker.com/hs-fs/hubfs/Imported_Blog_Media/Intelligence%20artificielle%20image-1.jpg"
              class="d-block w-100"
              style="height: 80vh"
              alt="..."
            />
            <div class="carousel-caption top-0 d-block">
              <h1>First slide label</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.watchguard.com/sites/default/files/styles/blog_feature_image/public/blog-images/Cybersecurity%20tops%20the%20budget%20priorities.jpg?itok=vT2AyvpH"
              class="d-block w-100"
              style="height: 80vh"
              alt="..."
            />
            <div class="carousel-caption top-0 d-block">
              <h1>First slide label</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.division{
    margin-top: 80px;
}
.carousel-caption {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
}
</style>