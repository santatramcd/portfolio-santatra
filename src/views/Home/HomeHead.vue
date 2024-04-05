<template>
  <div>
    <div class="container mt-5">
      <h1>
        ANDRIANJAKA <br> {{ titleStyled }}
      </h1>
      <span class="span">Développeur Web#</span>
      <span class="span-hr"></span>
    </div>
  </div>
</template>
<script setup>
AOS.init({
  offset: 400,
  duration: 1000,
});

import { onMounted, ref } from "vue";
// import Title from "@/components/Common/Title.vue";

const titleStyled = ref("SANTATRA");

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
  const contenu = "SANTATRA";
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
</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
h1 {
  font-size: 10vw;
  font-family: "PP Right Grotesk Tight Bold", sans-serif;
  font-weight: bolder;
  color: $colorwhite;
  text-align: center;
  height: 25vw;
}

.span {
  color: $colorwhite;
  font-size: 20px;
  text-align: center;
  display: block;
  // background-color: red;
  font-weight: 600;
}
.span-hr {
  width: 173px;
  height: 2px;
  background-color: $colorwhite;
  margin: auto;
  display: flex;
}
</style>
