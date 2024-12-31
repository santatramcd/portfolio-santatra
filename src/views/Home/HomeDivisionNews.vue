<template>
  <div>
    <!-- version pc -->
    <section id="gallery" class="gallery section section-pc">
      <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4 justify-content-center">
          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="col-xl-3 col-lg-4 col-md-6"
          >
            <div class="gallery-item h-100">
              <img :src="item.imgSrc" class="img-fluid" :alt="item.title" />
              <div
                class="gallery-links d-flex align-items-center justify-content-center"
              >
                <a
                  href="javascript:void(0)"
                  class="glightbox preview-link"
                  @click="openModal(item)"
                >
                  <i class="bi bi-arrows-angle-expand"></i>
                </a>
                <a
                  :href="item.detailsLink"
                  target="_blank"
                  class="details-link"
                >
                  <i class="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Version Mobile -->
    <div
      class="container-fluid gallery section-mobile"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active boutton-slide"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            v-for="(item, index) in galleryItems.slice(1)"
            :key="'indicator-' + index"
            type="button"
            :data-bs-target="'#carouselExampleIndicators'"
            :data-bs-slide-to="index + 1"
            :aria-label="'Slide ' + (index + 2)"
            class="boutton-slide"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(item, index) in galleryItems"
            :key="'carousel-' + index"
            class="carousel-item gallery-item"
            :class="{ active: index === 0 }"
          >
            <img :src="item.imgSrc" class="img-fluid" :alt="item.title" />
            <div
              class="gallery-links d-flex align-items-center justify-content-center"
            >
              <a
                href="javascript:void(0)"
                class="glightbox preview-link"
                @click="openModal(item)"
              >
                <i class="bi bi-arrows-angle-expand"></i>
              </a>
              <a :href="item.detailsLink" target="_blank" class="details-link">
                <i class="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background: rgba(0, 0, 0, 0.9)">
          <div class="modal-header" style="border-bottom: 1px solid black">
            <h5
              class="modal-title"
              style="text-transform: uppercase; color: #eee"
              id="exampleModalLabel"
            >
              {{ selectedItem?.title || "Projet" }}
            </h5>
            <a
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="color: #eee"
            >
              <i class="bi bi-x-lg"></i
            ></a>
          </div>
          <div class="modal-body overflow-body">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div
                  v-for="(img, index) in selectedItem?.images || [
                    selectedItem?.imgSrc,
                  ]"
                  :key="index"
                  :class="['carousel-item', { active: index === 0 }]"
                >
                  <img
                    :src="img"
                    class="d-block w-100"
                    :alt="selectedItem?.title"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Import des images
import SM from "../../assets/image/santatramichado.png";
import Createak from "../../assets/image/createak.png";
import App from "../../assets/image/calcul-kcal.png";
import Artiist from "../../assets/image/artiist.png";
import RobRuth from "../../assets/image/Capture.png";
import Mda from "../../assets/image/mda.png";
import Lio from "../../assets/image/lios-collection.png";
import Eva from "../../assets/image/eva-car.png";

// Définition des éléments de la galerie
const galleryItems = [
  {
    imgSrc: SM,
    title: "Santatra Michado",
    detailsLink: "https://santatra-michado.com",
  },
  {
    imgSrc: Createak,
    title: "Createak",
    detailsLink: "https://createak.mu/",
  },
  {
    imgSrc: App,
    title: "Calculateur de Calories",
    detailsLink: "https://santatramcd.github.io/calculateur-de-calories/",
  },
  {
    imgSrc: Artiist,
    title: "Artiist",
    detailsLink: "https://www.artiist.fr/",
  },
  {
    imgSrc: RobRuth,
    title: "RobinRuth Thailand",
    detailsLink: "https://robinruth-thailand.com/",
  },
  {
    imgSrc: Mda,
    title: "Mada Digital Agency",
    detailsLink: "https://mada-digital-agency.com",
  },
  {
    imgSrc: Lio,
    title: "Lios Collection",
    detailsLink: "https://lios-collection.mu/",
  },
  {
    imgSrc: Eva,
    title: "Eva Car Rental",
    detailsLink: "https://eva-car-rental.vercel.app/",
  },
];

// Références pour le modal
const selectedItem = ref(null);

function openModal(item) {
  selectedItem.value = item;
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}
</script>

<style scoped lang="scss">
/*--------------------------------------------------------------
# Gallery Section
--------------------------------------------------------------*/
.gallery .gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.gallery .gallery-item img {
  transition: 0.3s;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  // height: 100%;
  box-shadow: rgba(139, 130, 130, 0.08) 0px 2px 20px;
  margin: 0px;
  height: 222px;
}

.gallery .gallery-links {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: all ease-in-out 0.3s;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
}

.gallery .gallery-links .preview-link,
.gallery .gallery-links .details-link {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
  line-height: 1.2;
  margin: 30px 8px 0 8px;
}

.gallery .gallery-links .preview-link:hover,
.gallery .gallery-links .details-link:hover {
  color: #ffffff;
}

.gallery .gallery-links .details-link {
  font-size: 30px;
  line-height: 0;
}

.gallery .gallery-item:hover .gallery-links {
  opacity: 1;
}

.gallery .gallery-item:hover .preview-link,
.gallery .gallery-item:hover .details-link {
  margin-top: 0;
}

.gallery .gallery-item:hover img {
  transform: scale(1.1);
}

.glightbox-clean .gslide-description {
  background: #272727;
}

.glightbox-clean .gslide-title {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}
.overflow-body {
  overflow-y: auto; 
  scrollbar-width: thin; 
  scrollbar-color: transparent transparent;
}
.carousel-indicators {
  position: absolute;
  top: 250px;
}
.boutton-slide {
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 50%;
}
.boutton-slide.active {
  background: #45f3ff;
}
.section-mobile {
  display: none;
}
.section-pc {
  display: flex;
}
@media only screen and (max-width: 768px) {
  .section-mobile {
    display: block;
    margin-bottom: 140px;
  }
  .section-pc {
    display: none;
  }
}
</style>
