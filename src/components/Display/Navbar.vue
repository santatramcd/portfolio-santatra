<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid container">
        <a class="nav-link navbar-brand" href="#" @click="home">SANTATRA®</a>
        <button
          class="navbar-toggler"
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
            <a class="nav-link" href="#" @click="home">Home</a>
            <a class="nav-link" href="#" @click="about">About</a>
            <a class="nav-link" href="#" @click="work">Work</a>
            <a class="nav-link" href="#" @click="contact">Contact</a>
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

import { ref } from 'vue';

const buttonIconClass = ref('bi bi-list');

function toggleButtonText() {
  if (buttonIconClass.value === 'bi bi-list') {
    buttonIconClass.value = 'bi bi-x';
  } else {
    buttonIconClass.value = 'bi bi-list';
  }
}
</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #23242a);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
nav {
  background-color: $colorblack;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.nav-link {
  color: $colorwhite;
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
  margin-left: 15px;
}
.navbar-toggler-icon {
  color: $colorwhite;
}
i {
  color: $colorwhite;
  font-size: 30px;
}
</style>
