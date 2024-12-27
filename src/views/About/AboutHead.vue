<template>
  <div class="div">
    <div>
      <!-- <div class="container">
        <h1>Mon Curriculum Vitae</h1>
      </div> -->
      <!-- <img :src="Cv" alt="" srcset="" /> -->
      <div class="mt-5">
        <section id="about" class="about section">
          <div class="container">
            <div class="row gy-4 justify-content-center">
              <div class="col-lg-4 image-container-zoom" ref="imageContainer">
                <img :src="Profil" class="img-fluid" ref="img"/>
                <div class="zoom" ref="zoom"></div>
              </div>
              <div class="col-lg-6 content">
                <h2>Développeur Web professionnel</h2>
                <p class="fst-italic py-3">
                  Je m’appelle Santatra Michado, développeur web passionné et spécialisé dans la création de sites web modernes et sur mesure. Avec une solide expérience en développement front-end, notamment avec VueJs , j’aide mes clients à concrétiser leurs idées digitales, que ce soit pour un site vitrine, un portfolio, une boutique en ligne, ou une plateforme de formation.
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Birthday:</strong> <span>Mars 1999</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Website:</strong> <span>santatra-michado.com</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Phone:</strong> <span>+261 32 46 658 49</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>City:</strong> <span>Madagascar</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Age:</strong> <span>25</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Degree:</strong> <span>Licence</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Email:</strong> <span>Andrianjakasantatra22@gmail.com</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>
                        <strong>Freelance:</strong> <span>Disponible</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="py-3">
                  Vous êtes étudiant, dirigez une école, une université, un centre de formation, un centre de fitness, un hôtel, une entreprise de location de voitures, une société de bâtiment, ou autre ? Vous avez besoin d’un site web pour représenter votre activité ou toucher un plus grand public ? Je suis là pour vous aider ! Que vous ayez besoin d’une présence en ligne professionnelle, d’un site fonctionnel et performant, ou d’une plateforme sur mesure, je m’engage à fournir un site de qualité, optimisé pour l’expérience utilisateur et le référencement.
                </p>
                <!-- <div>
                  <a @click="downloadCV" class="a-down">Telecharger mon CV</a>
                </div> -->
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import Profil from "../../assets/image/portrait.jpg";

import { ref, onMounted } from "vue";

const imageContainer = ref(null);
const img = ref(null);
const zoom = ref(null);

onMounted(() => {
  const container = imageContainer.value;
  const image = img.value;
  const zoomDiv = zoom.value;

  if (!container || !image || !zoomDiv) return;

  container.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    zoomDiv.style.backgroundImage = `url(${image.src})`;
    zoomDiv.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  });

  container.addEventListener("mouseenter", () => {
    zoomDiv.style.display = "block";
  });

  container.addEventListener("mouseleave", () => {
    zoomDiv.style.display = "none";
  });
});
</script>
<style scoped lang="scss">
h1 {
  padding-top: 50px;
  padding-left: 20px;
  color: #ffff;
  font-size: 30px;
}
.carousel-caption {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
}
img {
  width: 100vw;
}
p{
  text-align: justify;
}
.a-down {
  text-decoration: none;
  background-color: black;
  color: #fff;
  // margin-left: 20px;
  font-weight: 500;
  padding: 5px 8px;
  display: inline-block;
  cursor: pointer;
  box-shadow: 2px 3px 7px grey;
}
/*--------------------------------------------------------------
# About Section
--------------------------------------------------------------*/
.about .content h2 {
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.about .content ul strong {
  margin-right: 10px;
}

.about .content ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #fff;
  line-height: 0;
}
/*--------------------------------------------------------------
# Global Sections
--------------------------------------------------------------*/
section,
.section {
  color: #fff;
  // background-color: red;
  padding: 60px 0;
  scroll-margin-top: 100px;
  overflow: clip;
}
.image-container-zoom {
  position: relative;
  width: 500px;
  height: 500px;
}

.image-container-zoom img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: alias;
}

.zoom {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 200%; /* Augmente l'effet de zoom */
  background-repeat: no-repeat;
  pointer-events: none;
}
@media (max-width: 1199px) {
  section,
  .section {
    scroll-margin-top: 66px;
  }
}
</style>
