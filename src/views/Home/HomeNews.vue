<template>
  <div>
    <section id="hero" class="hero section">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-lg-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>
              <span>{{ $t("Je") }}</span>
              <span class="underlight">Santatra {{ titleStyled }}</span>
              {{ $t("devweb") }} <span> {{ $t("mada") }} </span>
            </h2>
            <p>
              {{ $t("site") }}
            </p>
            <a href="#" class="btn-get-started" @click="downloadCV">
              {{ $t("Download") }} <span><i class="bi bi-download"></i></span
            ></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// import Title from "@/components/Common/Title.vue";

const titleStyled = ref("Michado");

onMounted(() => {
  clearText();
});

function clearText() {
  const contenu = titleStyled.value;
  titleStyled.value = "";

  let index = contenu.length;
  const effacement = setInterval(() => {
    index--;
    titleStyled.value = contenu.slice(0, index);
    if (index === 0) {
      clearInterval(effacement);
      setTimeout(writeText, 1000);
    }
  }, 150);
}

function writeText() {
  const contenu = "Michado";
  let index = 0;
  const ecriture = setInterval(() => {
    index++;
    titleStyled.value = contenu.slice(0, index);
    if (index === contenu.length) {
      clearInterval(ecriture);
      setTimeout(clearText, 1000);
    }
  }, 150);
}

import cvURL from "../../assets/autres/cv-santatra.pdf";

function downloadCV() {
  const link = document.createElement("a");
  link.href = cvURL;
  link.download = "cv-santatra.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>
<style scoped lang="scss">
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  width: 100%;
  min-height: 30vh;
  position: relative;
  padding: 120px 0 120px 0;
  display: flex;
  align-items: center;
  color: #eee;
  // background: url("../../../public/photos.JPG");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
}

.hero h2 {
  margin: 0 0 10px 0;
  font-size: 38px;
  font-weight: 700;
  text-transform: capitalize;
}

.hero h2 .underlight {
  position: relative;
  z-index: 1;
  padding: 0 5px;
  display: inline-block;
}

.hero h2 .underlight:before {
  content: "";
  position: absolute;
  height: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  background: #27a776;
  z-index: -1;
}

.hero p {
  color: #eee;
  margin-bottom: 30px;
  font-size: 18px;
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }
}
.hero .btn-get-started {
  color: #eee;
  background: #27a776;
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  padding: 12px 40px;
  border-radius: 4px;
  transition: 0.5s;
  text-transform: uppercase;
  letter-spacing: 1px;
}
a {
  text-decoration: none;
}
.hero .btn-get-started:hover {
  background-color: color-mix(in srgb, #27a776 90%, white 10%);
}
.bi-download::before {
  content: "\f30a";
  font-weight: bolder !important;
}
</style>
