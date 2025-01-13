<template>
    <div>
        <AboutHead/>
        <AboutSendFormVue data-aos="fade-up"/>
    </div>
</template>
<script setup>
import AboutHead from '../About/AboutHead.vue';
import AboutSendFormVue from './AboutSendForm.vue';
AOS.init({
  offset: 400,
  duration: 1000,
});
</script>
<style scoped lang="scss">

</style>