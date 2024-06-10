<template>
  <div>
    <div class="container">
      <div>
        <h1 style="color: #fff">Les sites que j'ai déjà créés par :</h1>
      </div>
      <div>
        <ul class="ul-list-proj">
          <li>
            <a href="#" @click.prevent="filterProjects('Tous les projets')"
              >Tous les projets</a
            >
          </li>
          <li>
            <a href="#" @click.prevent="filterProjects('WordPress')"
              >WordPress</a
            >
          </li>
          <li>
            <a
              href="#"
              @click.prevent="filterProjects('Vuejs 3 et Bootstrap 5')"
              >Vuejs 3 et Bootstrap 5</a
            >
          </li>
        </ul>
      </div>
      <transition-group name="list" tag="div" class="row">
        <div
          class="col-md-4 mt-3"
          v-for="item in filteredData"
          :key="item.title"
        >
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
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import artiist from "../../assets/image/artiist.png";
import maki from "../../assets/image/maki.png";
import createak from "../../assets/image/createak.png";
import robin from "../../assets/image/Capture d'écran 2024-05-30 094224.png";

const data = [
  {
    img: artiist,
    title: "https://www.artiist.fr",
    link: "https://www.artiist.fr/",
    technology: "WordPress",
  },
  {
    img: createak,
    title: "https://createak.mu",
    link: "https://createak.mu/",
    technology: "WordPress",
  },
  {
    img: robin,
    title: "https://robinruth-thailand.com",
    link: "https://robinruth-thailand.com/",
    technology: "WordPress",
  },
  {
    img: maki,
    title: "https://maki-car-rental-mada.netlify.app",
    link: "https://maki-car-rental-mada.netlify.app/",
    technology: "Vuejs 3 et Bootstrap 5",
  },
];

const selectedTechnology = ref("Tous les projets");

const filteredData = computed(() => {
  if (selectedTechnology.value === "Tous les projets") {
    return data;
  }
  return data.filter((item) => item.technology === selectedTechnology.value);
});

function filterProjects(technology) {
  selectedTechnology.value = technology;
}
</script>

<style scoped>
.ul-list-proj li {
  display: inline;
  margin-right: 10px;
}
h1 {
  padding: 50px 0px;
  color: white;
  font-size: 30px;
}
ul {
  padding: 0;
  /* margin-top: 50px; */
}
.ul-list-proj a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  padding: 5px 10px;
  background-color: #45f3ff;
  border-radius: 10px;
}

.ul-list-proj a:hover {
  text-decoration: underline;
}

.divcard {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.image img {
  max-width: 100%;
  height: auto;
}

.title-card {
  font-size: 1.2em;
  margin-top: 10px;
}

.colorname {
  background-color: #f9f9f9;
  padding: 10px;
  border-top: 1px solid #ddd;
  border-radius: 0 0 5px 5px;
}

/* Transition styles */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
