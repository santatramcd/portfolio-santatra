<template>
  <div>
    <div class="div-cont">
      <div class="container">
        <h1>Vitrine de projets</h1>
      </div>
      <div>
        <div class="row div-row p-0 m-0">
          <div class="col-lg-4 p-0 m-0 mt-5" data-aos="fade-up" data-aos-delay="0">
            <div class="div-im-1">
              <img src="../../assets/image/artiist.png" alt="" />
            </div>
          </div>
          <div
            class="col-lg-4 p-0 m-0 mt-5 div-2-col"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="div-im-2">
              <img src="../../assets/image/projet.png" alt="" />
            </div>
          </div>
          <div
            class="col-lg-4 p-0 m-0 mt-5 div-col-resp"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="div-im-3">
              <img src="../../assets/image/site-web.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.div-cont {
  margin-top: 150px;
  color: #fff;
  width: 100%;
  // margin-left: 100px;
}
img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  margin: 0;
  height: 100%;
  box-shadow: 0 2px 20px rgba(139, 130, 130, 0.08);
}
h1 {
  font-size: 35px;
  padding: 15px 0;
  color: #fff;
}
.div-im-1 {
  // background-color: aqua;
  width: 100%;
  height: 400px;
}
.div-im-2 {
  // background-color: rgb(185, 80, 178);
  width: 70%;
  height: 250px;
}
.div-2-col {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
}
.div-im-3 {
  // background-color: aqua;
  width: 100%;
  height: 400px;
}
@media only screen and (max-width: 988px) {
  h1 {
    text-align: center;
  }
}
@media only screen and (max-width: 500px) {
  // .div-im-3,
  // .div-im-2,
  // .div-im-1 {
  //   width: 70%;
  //   height: 250px;
  // }
  // .div-col-resp {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: flex-end;
  // }
  .div-im-2 {
  // background-color: rgb(185, 80, 178);
  width: 100%;
  height: auto;
}
}
</style>
