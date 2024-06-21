<template>
  <div class="div">
    <div>
      <div class="container">
        <h1>Mon Curriculum Vitae</h1>
        <div>
          <a @click="copierTexte" class="a-down">Copier mon adresse email</a>
        </div>
      </div>
      <img :src="Cv" alt="" srcset="" />
    </div>
    <!-- <div class="division">
      <div class="container"></div>
    </div>
     -->
  </div>
</template>
<script setup>
import Cv from "../../assets/image/cv-s.png";
import { ref } from 'vue';

const copierTexte = () => {
  const texteACopier = "andrianjakasantatra22@gmail.com";
  const tempInput = document.createElement("input");
  tempInput.value = texteACopier;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Texte copié dans le presse-papiers : " + texteACopier);
}
</script>
<style scoped lang="scss">
h1 {
  padding: 50px 20px;
  color: #ffff;
  font-size: 30px;
}
.carousel-caption {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  // position: absolute;
  // background-color: #3333;
}
img {
  width: 100vw;
}
.a-down {
  text-decoration: none;
  /* padding: 12px; */
  background-color: #45f3ff;
  color: black;
  margin-left: 20px;
  font-weight: 600;
  padding: 5px 8px;
  display: inline-block;
}
</style>
