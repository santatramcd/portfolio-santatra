<template>
  <div>
    <div class="container">
      <h1 style="text-transform: uppercase">{{ $t("realisation") }} :</h1>
      <ul class="ul-list-proj">
        <li v-for="tech in technologies" :key="tech">
          <a href="javascript:void(0)" @click.prevent="filterProjects(tech)">
            {{ tech }}
          </a>
        </li>
      </ul>
      <transition-group name="list" tag="div" class="row div-scroll">
        <div
          class="col-md-4 mt-4"
          v-for="item in filteredData"
          :key="item.link"
        >
          <div class="divcard">
            <div class="image">
              <img :src="item.img" :alt="item.title" />
            </div>
            <div class="colorname">
              <div class="hover-div">
                <span class="element"></span>
                <div class="links">
                <h3 class="title-card">{{ item.title }}</h3>
                  <span class="span-link">
                    <a :href="item.link" target="_blank">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </span>

                  <span class="span-link">
                    <a href="javascript:void(0)" @click="openModal(item)">
                      <i class="bi bi-plus"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <!-- Modal -->
    <div
      class="modal fade bg-dark"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background: rgba(0, 0, 0, 0.6);">
          <div class="modal-header">
            <h5 class="modal-title" style="text-transform: uppercase;" id="exampleModalLabel">
              {{ selectedItem?.title || "Projet" }}
            </h5>
            <a
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="color: #fff!important;"
            >
            <i class="bi bi-x-lg"></i></a>
          </div>
          <div class="modal-body overflow-body">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div
                  v-for="(img, index) in selectedItem?.images || [
                    selectedItem?.img,
                  ]"
                  :key="index"
                  :class="['carousel-item', { active: index === 0 }]"
                >
                  <img
                    :src="img"
                    class="d-block w-100"
                    :alt="selectedItem?.title"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
// import { ref, computed } from "vue";
import artiist from "../../assets/image/artiist.png";
import maki from "../../assets/image/maki.png";
import createak from "../../assets/image/createak.png";
import robin from "../../assets/image/Capture.png";
import projet from "../../assets/image/react.png";
import vueprojet from "../../assets/image/projet.png";
import Monsite from "../../assets/image/santatramichado.png";
import Mda from "../../assets/image/mda.png";
import Lios from "../../assets/image/lios-collection.png";
import Kcal from "../../assets/image/calcul-kcal.png";
import ReactJs from "../../assets/image/react-vercel.png";
import eva from "../../assets/image/eva-car.png";

const data = [
  {
    img: Monsite,
    title: "Santatra Michado",
    link: "https://santatra-michado.com",
    technology: "WordPress",
  },
  {
    img: Mda,
    title: "Mada Digital Agency",
    link: "https://mada-digital-agency.com",
    technology: "WordPress",
  },
  {
    img: artiist,
    title: "artiist",
    link: "https://www.artiist.fr/",
    technology: "WordPress",
  },
  {
    img: createak,
    title: "Createak",
    link: "https://createak.mu/",
    technology: "WordPress",
  },
  {
    img: robin,
    title: "robinruth thailand",
    link: "https://robinruth-thailand.com/",
    technology: "WordPress",
  },
  {
    img: maki,
    title: "Maki car rental",
    link: "https://maki-car-rental-mada.netlify.app/",
    technology: "Vuejs 3",
  },
  {
    img: eva,
    title: "eva car rental",
    link: "https://eva-car-rental.vercel.app/",
    technology: "Vuejs 3",
  },
  {
    img: vueprojet,
    title: "pinkscrap2",
    link: "https://pinkscrap2.netlify.app/",
    technology: "Vuejs 3",
  },
  {
    img: projet,
    title: "Projet",
    link: "https://projet-santatra.netlify.app/",
    technology: "React Js",
  },
  {
    img: ReactJs,
    title: "Portfolio",
    link: "https://projet-react-js-pi.vercel.app/",
    technology: "React Js",
  },
  {
    img: Kcal,
    title: "Calculateur de calories",
    link: "https://santatramcd.github.io/calculateur-de-calories/",
    technology: "Application",
  },
  {
    img: Lios,
    title: "lios collection",
    link: "https://lios-collection.mu/",
    technology: "grav",
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

const technologies = [
  "Tous les projets",
  "WordPress",
  "Vuejs 3",
  "React Js",
  "Application",
  "grav",
];
const selectedItem = ref(null);

// Fonction pour ouvrir le modal et afficher les détails du projet sélectionné
function openModal(item) {
  selectedItem.value = item;
  const modalElement = document.getElementById("exampleModal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

onMounted(() => {
  // Vérification de l'intégration Bootstrap
  if (!window.bootstrap) {
    console.error("Bootstrap JS n'est pas chargé !");
  }
});
</script>

<style lang="scss" scoped>
.ul-list-proj li {
  display: inline;
  margin-right: 10px;
}
h1 {
  padding: 50px 0px;
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
  padding: 10px 15px;
  background-color: #45f3ff;
  border-radius: 10px;
  cursor: pointer;
}

.ul-list-proj a:hover {
  color: #fff;
  background-color: #111;
}
.modal-title{
  color: rgba(255, 255, 255, 0.5);

}
a {
  text-decoration: none;
}
.hover-div {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  border-radius: 10px;

}
.element::before {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  top: 15px;
  left: 15px;
  position: absolute;
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}
.element::after {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.colorname {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 5px 5px;
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
  border-radius: 10px;

}

.divcard {
  position: relative;
  transition: transform 0.3s ease; /* Ajout pour l'animation */
}

.divcard:hover .colorname {
  opacity: 1; /* Affiche l'élément lors du survol */
  transform: scale(1); /* Passe à la taille normale pour l'effet zoom-in */
}

.image {
  height: 222px;
}
.image img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  height: 100%;
  border-radius: 10px;
}

.title-card {
  font-size: 1.2em;
  margin-top: 10px;
  text-transform: capitalize;
  text-align: center;
}

/* Transition styles */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateY(30px); */
  transform: scale(0.8);
}
.overflow-body{
  overflow-y: auto; /* Permet le défilement */
  scrollbar-width: thin; /* Réduit la largeur de la barre pour Firefox */
  scrollbar-color:transparent transparent; /* Couleur de la barre et du fond pour Firefox */
}
.div-scroll {
  max-height: 500px;
  overflow-y: auto; /* Permet le défilement */
  scrollbar-width: thin; /* Réduit la largeur de la barre pour Firefox */
  scrollbar-color: #45f3ff transparent; /* Couleur de la barre et du fond pour Firefox */
}

/* Personnalisation pour les navigateurs WebKit (Chrome, Safari, Edge moderne) */
.div-scroll::-webkit-scrollbar {
  width: 5px; /* Définit la largeur de la barre */
}

.div-scroll::-webkit-scrollbar-thumb {
  background-color: #333; /* Couleur de la barre */
  border-radius: 10px; /* Arrondi de la barre */
}

.div-scroll::-webkit-scrollbar-track {
  background-color: transparent; /* Couleur de l'arrière-plan */
}
.span-link {
  // background: #45f3ff;
  display: inline-block;
  font-size: 2em;
  text-align: center;
  width: 100%;
  max-height: 38px;
  color: #fff;
}
a{
  // color: #ccc!important;
}
a:hover {
  color: #fff;
}
.modal-header{
  border-bottom: 1px solid black;
}
@media (max-width: 470px) {
  .ul-list-proj {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0;
    gap: 15px;
  }
  .ul-list-proj li {
    margin-right: 0;
  }
}
</style>
