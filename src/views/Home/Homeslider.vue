<template>
  <div class="container-div">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 card">
          <div class="div-show">
            <h1 class="title-show">
              Afficher tous les projets
            </h1>
            <div class="div-a"><a href="#" @click="work">Click me -></a></div>
          </div>
        </div>
        <div class="col-lg-6 card">
          <div class="div-rel">
            <div class="div-pos-1" data-aos="fade-up" data-aos-delay="0">
              <img src="../../assets/image/Capture.png" alt="" srcset="" />
            </div>
            <div class="div-pos-2" data-aos="fade-up" data-aos-delay="300">
              <img src="../../assets/image/createak.png" alt="" />
            </div>
            <div class="div-pos-3" data-aos="fade-up" data-aos-delay="600">
              <img src="../../assets/image/maki.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const work = () => {
  router.push("/work");
};

AOS.init({
  offset: 400,
  duration: 1000,
});
</script>
<style scoped lang="scss">
.card {
  background-color: #23242a !important;
  border: none!important;
  margin-top: 50px;
}
.container-div {
  margin-top: 100px;
  margin-bottom: 100px;
}
.div-a a{
  padding: 12px 25px;
  background-color: #45f3ff;
  // background-color: #23242a;
  font-weight: bolder;
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.733);
  text-decoration: none;

}
.title-show{
  text-transform: uppercase;
  max-width: 80%;
  font-weight: bolder;
}
.div-show{
    color: #fff;
    // background-color: red;
    min-height: 100%;
    display: flex;
    gap: 50px;
    flex-direction: column;
    justify-content: center;
}
.div-rel {
  min-height: 500px;
  // background-color: red;
}
.div-pos-2,
.div-pos-3,
.div-pos-1 {
  width: 100%;
  height: 100%;
  position: absolute;
  // background: aqua;
}
img {
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  /* border: 1px solid #ccc; */
  // background-color: blue;
  height: 70%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.337);
  border-radius: 20px;
}
.div-pos-2 {
  // background: burlywood;
  position: absolute;
  top: 120px;
  left: -50px;
}
.div-pos-3 {
  // background-color: brown;
  position: absolute;
  top: 50px;
  left: -120px;
}
</style>
