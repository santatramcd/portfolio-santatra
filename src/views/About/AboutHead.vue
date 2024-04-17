<template>
  <div class="div">
    <div>
      <h1>Mon Curriculum Vitae</h1>
      <img :src="Cv" alt="" srcset="">
    </div>
    <!-- <div class="division">
      <div class="container"></div>
    </div>
     -->
  </div>
</template>
<script setup>
import Cv from '../../assets/image/cv.jpg'
</script>
<style scoped lang="scss">
.division {
  width: 100%;
  padding: 80px 0px;
  background: url("https://leclaireur.fnac.com/wp-content/uploads/2023/04/shutterstock-563307940-1256x826.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  min-height: 100vh;
}
h1{
  padding: 50px 20px;
  color: #ffff;
}
.carousel-caption {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  // position: absolute;
  background-color: #3333;
}
img{
  width: 100vw;
}
</style>
