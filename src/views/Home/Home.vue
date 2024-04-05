<template>
  <div>
    <HomeHead />
    <HomeTech />
  </div>
</template>
<script setup>
import HomeHead from '../Home/HomeHead.vue'
import HomeTech from '../Home/HomeTechnology.vue'
AOS.init({
  offset: 400,
  duration: 1000,
});

</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;

</style>
