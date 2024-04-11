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
        >
          <span><i class="bi bi-list"></i></span>
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
</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
nav{
  background-color: $colorblack;
}
.nav-link{
  color: $colorwhite;
  font-size: 1.5rem;
}
.navbar-nav{
  // background-color: red;
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.navbar-toggler-icon{
  color: $colorwhite;
}
i {
  color: $colorwhite;
  font-size: 30px;
}
</style>
