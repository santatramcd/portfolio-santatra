<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg nav-bg">
      <div class="container-fluid container">
        <a class="nav-link navbar-brand logo-web" href="#" @click="home"
          >SANTATRA®</a
        >
        <a class="nav-link navbar-brand logo-mobile" href="#" @click="home"
          >SM®</a
        >
        <div class="logo-mobile">
          <label class="switch">
            <input
              type="checkbox"
              :checked="theme === 'dark'"
              @change="toggleDark"
            />
            <span class="slider">
              <i v-if="theme === 'light'" class="bi bi-brightness-low-fill"></i>
              <i v-else class="bi bi-moon-stars-fill"></i>
            </span>
          </label>
        </div>
        <div class="div-lang-i18">
          <ul class="langage">
            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <img :src="$t('drapeau')" alt="drapeau" class="drapeau" />
                </span>
                {{ $i18n.locale.toUpperCase() }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li
                  v-for="locale in $i18n.availableLocales"
                  :key="`locale-${locale}`"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="$i18n.locale = locale"
                  >
                    {{ locale.toUpperCase() }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <button
          class="navbar-toggler i-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleButtonText"
        >
          <i :class="buttonIconClass"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#" @click="home">{{ $t("Home") }}</a>
            <a class="nav-link" href="#" @click="about">{{ $t("Resume") }}</a>
            <a class="nav-link" href="#" @click="work">Portfolio</a>
            <a class="nav-link" href="#" @click="contact">Contact</a>
            <a class="nav-link div-langage" href="#">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>
                    <img :src="$t('drapeau')" alt="drapeau" class="drapeau" />
                  </span>
                  {{ $i18n.locale.toUpperCase() }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li
                    v-for="locale in $i18n.availableLocales"
                    :key="`locale-${locale}`"
                  >
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="$i18n.locale = locale"
                    >
                      {{ locale.toUpperCase() }}
                    </a>
                  </li>
                </ul>
              </li>
            </a>
            <a class="nav-link logo-web" href="#">
              <label class="switch">
                <input
                  type="checkbox"
                  :checked="theme === 'dark'"
                  @change="toggleDark"
                />
                <span class="slider">
                  <i
                    v-if="theme === 'light'"
                    class="bi bi-brightness-low-fill"
                  ></i>
                  <i v-else class="bi bi-moon-stars-fill"></i>
                </span>
              </label>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const home = () => {
  router.push("/");
};
const about = async () => {
  router.push("/about");
};
const work = () => {
  router.push("/work");
};
const contact = async () => {
  router.push("/contact");
};

// import { ref } from "vue";

const buttonIconClass = ref("bi bi-list");

function toggleButtonText() {
  if (buttonIconClass.value === "bi bi-list") {
    buttonIconClass.value = "bi bi-x";
  } else {
    buttonIconClass.value = "bi bi-list";
  }
}
// dark mode
import { ref } from "vue";

const theme = ref(localStorage.getItem("theme") || "dark");

const toggleDark = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.value);
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme.value);
};
document.body.classList.add(theme.value);
</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #23242a);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
nav {
  // background-color: $colorblack;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.nav-link {
  // color: $colorwhite;
  font-size: 1.5rem;
}
.nav-link:hover {
  color: #45f3ff;
  text-shadow: 2px 5px 4px;
}
.navbar-nav {
  // background-color: red;
  width: 100%;
  display: flex;
  justify-content: space-around;
  // text-align: center;
  // margin-left: 15px;
}

i {
  // color: $colorwhite;
  font-size: 30px;
}
.div-cv {
  border-radius: 10px;
  // background: black;
}
.i18n {
  color: #eee;
  border: none;
  background: black;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
}
img {
  width: 25px;
  margin-top: -3px;
}
.dropdown-toggle {
  font-size: 18px;
  margin-top: -3px;
  text-shadow: none;
}
.div-langage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.langage {
  display: none;
  padding: 0;
}
.langage li{
  list-style: none;
}
.logo-mobile {
  display: none;
}
.dropdown-item {
  color: #000000;
}
.div-lang-i18 {
  display: flex;
  height: 35px;
  padding-top: 20px;
  flex-wrap: wrap;
  align-content: center;
}
@media only screen and (max-width: 991px) {
  .nav-link {
    // padding-left: 10px;
    text-align: center;
  }
  .div-langage {
    display: none;
  }
  .langage {
    display: flex;
  }
  .logo-web {
    display: none;
  }
  .logo-mobile {
    display: block;
  }
}
@media only screen and (max-width: 380px) {
  select {
    height: 25px;
  }
  img {
    width: 31px;
  }
}
</style>
