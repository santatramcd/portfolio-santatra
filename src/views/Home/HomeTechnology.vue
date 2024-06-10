<template>
  <div>
    <div class="container">
        <div>
            <h1>Je suis passionné par la technologie</h1>
        </div>
      <div class="row">
        <div class="col-md-4 mt-3"  v-for="(item, index) in data" :key="index">
          <!-- Contenu de la première colonne -->
          <div class="card divcard">
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
        img : "https://freenocode.org/wp-content/uploads/2020/10/WordPress-web.jpg",
        title : 'WordPress',
    },
    {
        img : "https://miro.medium.com/v2/resize:fit:1000/1*2VUijywcHU32qLVrQ7BFbA.png",
        title : 'VueJs 3'
    },
    {
        img : "https://www.tutorialrepublic.com/lib/images/bootstrap-5.0-illustration.png",
        title : 'Bootstrap 5',
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
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    /* border: 1px solid #ccc; */
    background-color: blue;
    height: 100%;
}
.row {
  align-items: stretch;
  position: relative;

}
.divcard {
  background-color: $colorblack;
  // border: 1px solid $colorwhite;
  height: 100%;
  border: none;
}
.colorname {
  color: $colorwhite;
  padding: 20px 0px;
}
.image{
    height: 250px;
    // border-bottom-right-radius: calc(.25rem - 1px);
    // width: 100%;
    // max-width: 300px;
    // height: auto;
    // min-height: 250px;
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
