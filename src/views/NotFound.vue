<template>
  <div>
    <p>404 Erreur</p>
  </div>
</template>

<script setup></script>

<style lang="scss">
/* Style pour le switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  z-index: 5;
}

.slider i {
  font-size: 18px;
  color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}

.slider i.bi-brightness-low-fill {
  left: 5px; /* Placer l'icône du soleil à gauche */
  bottom: -4px;
}

.slider i.bi-moon-stars-fill {
  right: 5px; /* Placer l'icône de la lune à droite */
  bottom: -3px;
}

.slider:before {
  content: "";
  position: absolute;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  /* background-color: white; */
  transition: 0.4s;
  left: 4px;
  bottom: 4px;
}

input:checked + .slider {
  background-color: #000000;
}

input:checked + .slider:before {
  transform: translateX(26px); /* Déplace le rond */
}
body.light {
    footer{
        background-color: #ccc;
    }
  li,
  a,
  .nav-link {
    color: #000000;
  }
}

/* Styles pour le mode sombre */
body.dark {
  a,
  li{
    color: #fff;
  }
  .i-dark,
  .nav-link {
    color: #eee;
  }
}
</style>
