<template>
  <div>
    <div class="container">
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
              <p>{{ item.description }}</p>
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
        img : "https://rockresearch.com/wp-content/uploads/2017/11/event_technology.jpg",
        title : 'Technology',
        description : `the application of scientific knowledge for practical purposes, especially in industry and commerce. It encompasses a wide range of tools, systems, and methods used to solve problems, improve processes, and enhance human capabilities.`,
    },
    {
        img : "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
        title : 'Virtualization',
        description : `the process of creating a virtual (rather than actual) version of something, such as an operating system, server, storage device, or network resource. This technology allows multiple virtual instances to run on a single physical machine, optimizing resource utilization, improving scalability, and enhancing flexibility in IT infrastructure management.`,
    },
    {
        img : "https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg",
        title : 'Artificial Intelligence',
        description : `human intelligence in machines, involving learning, reasoning, and self-correction. It enables machines to perform tasks like visual perception, speech recognition, decision-making, and language translation, traditionally requiring human intelligence.`,
    }
]
</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
.container{
    margin-top: 150px;
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
  padding: 20px;
}
.image{
    height: 200px;
}
p{
    text-align: justify;
}
</style>
