<template>
  <div>
    <div class="container">
      <h1>404 Erreur</h1>
    </div>
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
  bottom: -5px;
}

.slider i.bi-moon-stars-fill {
  right: 5px; /* Placer l'icône de la lune à droite */
  bottom: -7px;
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
  footer {
    background-color: #ccc;
  }
  li,
  a,
  .nav-link {
    color: #000000;
  }
  .divii {
    background-color: #fff;
  }
  .inpt {
    background-color: #fff;
  }
  .sendmailForm {
    color: #000000;
  }
  .div-icn-contact {
    border: 1px solid #333;
  }
  .i18n {
    color: #23242a;
    background: #eee;
  }
  .slider {
    border: 3px solid #ccc;
    box-shadow: inset 0 6px 12px rgba(0, 0, 0, 0.3);
  }
}

/* Styles pour le mode sombre */
body.dark {
  a,
  li {
    color: #fff;
  }
  .i-dark,
  .nav-link {
    color: #eee;
  }
  .divii {
    background-color: #28292d;
  }
  .inpt {
    background-color: #28292d;
  }
  .sendmailForm {
    color: #45f3ff;
  }
  .div-icn-contact {
    border: 1px solid rgba(238, 238, 238, 0.462);
  }
  .i18n {
    color: #eee;
    background: #23242a;
  }
  .slider {
    border: 3px solid #333;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
}
</style>
