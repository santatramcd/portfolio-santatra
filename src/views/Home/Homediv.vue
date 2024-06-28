<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mt-5">
          <div>
            <img
              src="../../assets/image/responsive.png"
              alt="image"
            />
          </div>
        </div>
        <div class="col-lg-6 div mt-5">
          <div>
            <h1>Entièrement réactif et prêt</h1>
            <p>
              Je suis spécialisé dans le responsive design, sur différentes sortes de plateformes : Ordinateur, téléphone, tablette. Chaque élément élaboré sera à 100% réactif et compatible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
.container {
  margin-top: 80px;
}
img {
  width: 90%;
  height: auto;
  // transform: rotate(-10deg);
  // border-radius: 50px;
  // opacity: 0.6;
  // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.66);
}
.div {
  display: flex;
  align-items: center;
}
p {
  text-align: justify;
  font-size: $param;
  color: $colorwhite;
}
h1 {
  font-size: 30px;
  color: $colorwhite;
  padding: 10px 0;
  text-transform: uppercase;
}
</style>
