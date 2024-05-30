<template>
  <div>
    <div class="container">
      <div>
        <h1>Les sites que j'ai déjà créés</h1>
      </div>
      <div class="row">
        <div class="col-md-4 mt-3" v-for="(item, index) in data" :key="index">
          <a :href="item.link">
            <div class="divcard">
              <div class="image">
                <img :src="item.img" alt="icon" />
              </div>
              <div class="colorname">
                <h3 class="title-card">{{ item.title }}</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import artiist from "../../assets/image/artiist.png";
import maki from "../../assets/image/maki.png";
import createak from "../../assets/image/createak.png";
import robin from "../../assets/image/Capture d'écran 2024-05-30 094224.png";
const data = [
  {
    img: artiist,
    title: "Artiist",
    link: "https://www.artiist.fr/",
  },
  {
    img: maki,
    title: "Maki car rental",
    link: "https://maki-car-rental-mada.netlify.app/",
  },
  {
    img: createak,
    title: "Createak",
    link: "https://createak.mu/",
  },
  {
    img: robin,
    title: "Robin Ruth",
    link: "https://robinruth-thailand.com/",
  },
];
</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
.container {
  margin-top: 50px;
  // background: red;
}
img {
  width: 100%;
  height: 100%;
  // background-color: aqua;
}
.row {
  align-items: stretch;
  position: relative;
}
.divcard {
  background-color: #23242a;
  height: 100%;
}
.colorname {
  color: $colorwhite;
  padding: 20px 0px;
}
.image {
  height: 250px;
}
h1,
h3 {
  font-size: 30px;
  color: $colorwhite;
}
h1 {
  padding: 15px 0;
}
a {
  text-decoration: none;
}
</style>
