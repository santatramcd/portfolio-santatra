<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 text-center"><h2>ANDRIANJAKA SANTATRA</h2></div>
                <div class="col-lg-4 text-center"><span>© {{ currentYear }}</span></div>
                <div class="col-lg-4 text-center pt-2"><div>
            <a @click="scrollToTop" class="icncent">
              <i class="bi bi-arrow-up-circle"></i>
            </a>
          </div></div>
            </div>
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
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
.container{
    margin-top: 80px;
}
span{
    display: inline-block;
}
span,
h2{
    font-size: 16px;
    font-weight: bolder;
    color: $colorwhite;
    padding: 30px 0;
}
i{
    font-size: 35px;
    color: $colorwhite;
    cursor: pointer;
}
</style>