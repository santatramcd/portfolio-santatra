<template>
  <div>
    <div class="container">
        <div>
            <h1>Je suis passionné par la technologie</h1>
        </div>
      <div class="row">
        <div class="col-md-4 mt-3"  v-for="(item, index) in data" :key="index">
          <!-- Contenu de la première colonne -->
          <div class="divcard">
            <div class="image">
              <img
                :src="item.img"
                alt="icon"
              />
            </div>
            <div class="colorname">
              <h3 class="title-card">{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const data =[
    {
        img : "https://ueuromed.org/sites/default/files/2020-04/cyber-securite.jpeg",
        title : 'Cybersécurité',
    },
    {
        img : "https://intelligence-artificielle.com/wp-content/uploads/2022/04/Robot-IA-6.jpg",
        title : 'Robotique'
    },
    {
        img : "https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg",
        title : 'Artificial Intelligence',
    }
]
</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #23242a);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
.container{
    margin-top: 80px;
    // background: red;
}
img {
  width: 100%;
  height: 100%;
  // background-color: aqua;
}
.row {
  align-items: stretch;
  position: relative;

}
.divcard {
  background-color: $colorblack;
  border: 1px solid $colorwhite;
  height: 100%;
}
.colorname {
  color: $colorwhite;
  padding: 20px 10px;
}
.image{
    height: 250px;
}
h1,
h3{
    font-size: 30px;
    color: $colorwhite;
}
h1{
    padding: 15px 0;
}
</style>
