<script setup>
import Navbar from './components/Display/Navbar.vue';
</script>

<template>
  <div>
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition appear name="fade-page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped lang="scss">

</style>
