<template>
  <div>
    <!-- <div class="container">
            <div class="row">
                <div class="col-lg-4 text-center"><h2>ANDRIANJAKA SANTATRA</h2></div>
                <div class="col-lg-4 text-center"><span>© {{ currentYear }}</span></div>
                <div class="col-lg-4 text-center pt-2"><div>
            <a @click="scrollToTop" class="icncent">
              <i class="bi bi-arrow-up-circle"></i>
            </a>
          </div></div>
            </div>
        </div> -->

    <div class="div-foot-div">
      <footer class="bd-footer py-5 mt-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <h5>SANTATRA MICHADO</h5>
              <ul class="list-unstyled small text-muted">
                <li class="mb-2 text-justify">
                  Disponible pour des missions freelance, je vous invite à me
                  contacter pour échanger sur vos besoins et objectifs.
                  Ensemble, donnons vie à vos projets et créons un site web qui
                  reflète l’essence de votre activité !
                </li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>MENU</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#"
                    ><router-link class="route-a" to="/"
                      >ACCUEIL</router-link
                    ></a
                  >
                </li>
                <li class="mb-2">
                  <a href="#"
                    ><router-link class="route-a" to="/about"
                      >CURRICULUM VITAE</router-link
                    ></a
                  >
                </li>
                <li class="mb-2">
                  <a href="#"
                    ><router-link class="route-a" to="/work"
                      >PORTFOLIO</router-link
                    ></a
                  >
                </li>
                <li class="mb-2">
                  <a href="#"
                    ><router-link class="route-a" to="/contact"
                      >CONTACT</router-link
                    ></a
                  >
                </li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Technologies</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#">Javascript</a>
                </li>
                <li class="mb-2">
                  <a href="#">React Js</a>
                </li>
                <li class="mb-2">
                  <a href="#">Vue Js</a>
                </li>
                <li class="mb-2">
                  <a href="#">Php</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Autres</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#">Html/css</a>
                </li>
                <li class="mb-2">
                  <a href="#">WordPress</a>
                </li>
                <li class="mb-2">
                  <a href="#">Laravel</a>
                </li>
                <li class="mb-2">
                  <a href="#">Github/Git</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Contactez-nous</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#"
                    >Retrouvez nos offres et bénéficiez de conseils d'experts</a
                  >
                </li>
                <li class="mb-2">
                  <a href="#">+261 32 46 658 49</a>
                </li>
              </ul>
              <ul class="list-unstyled reseau">
                <li class="mb-2">
                  <a href="#"><i class="bi bi-facebook"></i></a>
                </li>
                <li class="mb-2">
                  <a href="#"><i class="bi bi-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <div>
              <span>© Copyright {{ currentYear }}</span>
            </div>
          </div>
          <div class="col-lg-8"></div>
          <div class="col-lg-4 text-center mt-2">
            <a @click="scrollToTop" class="icncent">
              <i class="bi bi-arrow-up-circle"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  // Mettre à jour l'année toutes les secondes
  setInterval(() => {
    currentYear.value = new Date().getFullYear();
  }, 1000);
});
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<style scoped lang="scss">
.div-foot-div {
  margin-top: 80px;
}
li,
a {
  text-decoration: none;
  color: #fff !important;
}
.text-justify {
  text-align: justify;
}
footer {
  background-color: #333;
  color: #fff;
}
.route-a {
  font-size: 13px;
}
.reseau {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 1.4rem;
}
.icncent{
  font-size: 2.5rem;
  cursor: pointer;
}
</style>
