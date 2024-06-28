<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div>
            <img
              src="https://f.hellowork.com/blogdumoderateur/2023/09/AI-outils-code-developpeurs.jpg"
              alt="image"
            />
          </div>
        </div>
        <div class="col-lg-6 div">
          <div>
            <h1>Je suis un développeur web</h1>
            <p>
                Spécialisé dans la conception, le développement et la maintenance de sites web et d'applications web. Fortes compétences dans les langages de programmation ainsi que dans l'utilisation de frameworks modernes. Capacité démontrée à travailler efficacement en équipe et à livrer des projets de haute qualité dans les délais impartis.
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
  width: 100%;
  height: auto;
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
}
</style>
