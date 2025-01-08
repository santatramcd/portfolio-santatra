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
        <div class="col-md-4 mt-4" v-for="item in filteredData" :key="item.id">
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
        <div class="modal-content" style="background: rgba(0, 0, 0, 0.6)">
          <div class="modal-header">
            <h5
              class="modal-title"
              style="text-transform: uppercase"
              id="exampleModalLabel"
            >
              {{ selectedItem?.title || "Projet" }}
            </h5>
            <a
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="color: #fff !important"
            >
              <i class="bi bi-x-lg"></i>
            </a>
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
import axios from "axios";

// Déclarez les données dynamiques
const data = ref([]);

// Charger les données depuis Airtable
const baseID = "appTVkIAf30WtN760"; // Remplacez par votre ID de base
const tableName = "Work"; // Remplacez par le nom de votre table
const apiKey =
  "patGxW0NlAoR2aJ7I.31bf9f568319b4dc29a7fce42c88ed697ead7a4746bcadb9ea8003fbb5c45502"; // Remplacez par votre clé API

const airtableURL = `https://api.airtable.com/v0/${baseID}/${tableName}`;

const fetchAirtableData = async () => {
  try {
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    // Mettre à jour le tableau `data` avec les résultats d'Airtable
    data.value = response.data.records.map((record) => ({
      id: record.id,
      title: record.fields.Name, // Ajustez selon vos colonnes Airtable
      link: record.fields.Link, // Ajustez selon vos colonnes Airtable
      img: record.fields.Photos ? record.fields.Photos[0].url : "", // Assurez-vous que le champ 'Photos' existe
      technology: record.fields.Technology, // Ajustez selon vos colonnes Airtable
    }));
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données Airtable :",
      error
    );
  }
};

// Chargement des données au montage du composant
onMounted(() => {
  fetchAirtableData();
});

const selectedTechnology = ref("Tous les projets");

const filteredData = computed(() => {
  if (selectedTechnology.value === "Tous les projets") {
    return data.value;
  }
  return data.value.filter(
    (item) => item.technology === selectedTechnology.value
  );
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
  "grav cms",
];

const selectedItem = ref(null);

// Fonction pour ouvrir le modal et afficher les détails du projet sélectionné
function openModal(item) {
  selectedItem.value = item;
  const modalElement = document.getElementById("exampleModal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}
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
  cursor: pointer;
  color: #fff;
  background: linear-gradient(to bottom, #45f3ff, #266266);
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
  padding: 12px 40px;
  padding: 12px 18px 8px 18px;
  border-radius: 4px;
  transition: 0.5s;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ul-list-proj a:hover {
  // color: #fff;
  background: #111;
}
.modal-title {
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
.ul-list-proj {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0;
  gap: 8px;
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
.overflow-body {
  overflow-y: auto; /* Permet le défilement */
  scrollbar-width: thin; /* Réduit la largeur de la barre pour Firefox */
  scrollbar-color: transparent transparent; /* Couleur de la barre et du fond pour Firefox */
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
a:hover {
  color: #fff;
}
.modal-header {
  border-bottom: 1px solid black;
}
.bi {
  color: #ccc;
}
.bi:hover {
  color: #fff;
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
