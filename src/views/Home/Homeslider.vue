<template>
  <div class="div-animate">
    <!-- <div class="divis">
      <img src="https://gdcitsolutions.com/wp-content/uploads/Framework-Responsive-Design.jpg" alt="" />
    </div> -->
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
img {
  // width: 100%;
  // height: 100%;
  width: 20vw;
  height: 20vw;
  background: red;
  border-radius: 50%;
  -webkit-animation: rotation 12s infinite linear; /* Préfixe WebKit */
  animation: rotation 12s infinite linear;
  text-align: center;
}
// .div-animate {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// }

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
