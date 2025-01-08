<template>
  <div>
    <div class="div-foot-div">
      <footer class="bd-footer py-5 mt-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <h5>SANTATRA MICHADO</h5>
              <ul class="list-unstyled small text-muted">
                <li class="mb-2 text-justify">
                  {{ $t("footerdispo") }}
                </li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>MENU</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#"
                    ><router-link class="route-a" to="/"
                      >{{ $t("Home") }}</router-link
                    ></a
                  >
                </li>
                <li class="mb-2">
                  <a href="#"
                    ><router-link class="route-a" to="/about"
                      >{{ $t("Resume") }}</router-link
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
              <h5>{{ $t("realise") }}</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#">Javascript</a>
                </li>
                <li class="mb-2">
                  <a href="#">Bootstrap 5</a>
                </li>
                <li class="mb-2">
                  <a href="#">Vue Js 3</a>
                </li>
                <li class="mb-2">
                  <a href="#">Data Base Airtable</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>{{ $t("autre") }}</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#">Html/css</a>
                </li>
                <li class="mb-2">
                  <a href="#">WordPress</a>
                </li>
                <li class="mb-2">
                  <a href="#">Github/Git</a>
                </li>
                <li class="mb-2">
                  <a href="#">Javascript</a>
                </li>
                <li class="mb-2">
                  <a href="#">React Js / Angular</a>
                </li>
                <li class="mb-2">
                  <a href="#">Php / laravel</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>{{ $t("contact") }}</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#"
                    >{{ $t("offrexpert") }}</a
                  >
                </li>
                <li class="mb-2">
                  <a href="#">+261 32 46 658 49</a>
                </li>
                <li class="mb-2">
                  <a href="https://santatra-michado.com">https://santatra-michado.com</a>
                </li>
                
              </ul>
              <ul class="list-unstyled reseau">
                <li class="mb-2">
                  <a href="https://www.facebook.com/profile.php?id=100010304222710"><i class="bi bi-facebook"></i></a>
                </li>
                <li class="mb-2">
                  <a href="https://github.com/santatramcd"><i class="bi bi-github"></i></a>
                </li>
                <li class="mb-2">
                  <a href="#"><img :src="$t('drapeau')" alt="drapeau" /></a>
                </li>
                

              </ul>
            </div>
          </div>
        </div>
        <div class="row div-foot-icn">
          <div class="col-lg-12 text-center">
            <div>
              <span>© Copyright {{ currentYear }}</span>
            </div>
          </div>
          <div class="col-lg-8"></div>
          <div class="col-lg-4 div-icn-top">
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
  // color: #fff !important;
}
.text-justify {
  text-align: justify;
}
footer {
  background-color: #000000;
  // color: #fff;
}
.route-a {
  font-size: 13px;
  text-transform: uppercase;
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
.div-icn-top{
  margin-top: 10px;
  text-align: center;
}
.div-foot-icn{
  // background: red;
  width: 100%;
}
img{
  margin-top: -8px;
  width: 35px;
}
</style>
