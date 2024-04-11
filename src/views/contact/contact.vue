<template>
  <div>
    <div class="container">
      <div class="mt-5 divis-contact">
        <h1>Contacte-moi</h1>
        <p>Je suis un développeur web spécialisé dans la création de sites dynamiques et conviviaux. À la recherche de nouveaux projets passionnants, je suis disponible pour des missions freelance ou des opportunités en entreprise. Contactez-moi pour discuter de vos besoins en développement web. Flexible pour travailler à distance ou en présentiel. Créons ensemble des solutions innovantes !</p>
      </div>
      <div class="row">
        <div class="col-lg-6 mt-5">
          <div class="col-input">
            <label>Votre nom</label>
            <input
              type="text"
              v-model="fullName"
              placeholder="Full Name"
              required
            />
          </div>
          <div class="col-input mt-2">
            <label>Votre email</label>
            <input
              v-model="email_id"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="col-input mt-2">
            <label>Votre message</label>
            <textarea
              v-model="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="col-input-btn">
            <button @click="sendMail">Send</button>
          </div>
        </div>
        <div class="col-lg-6 mt-5">
            <div class="div2">
            <div class="d-flex">
              <div><span><i class="bi bi-person-fill"></i></span></div>
              <div><p class="par-cont">ANDRIANJAKA SANTATRA MICHADO</p></div>
            </div>
          </div>
          <div class="div2">
            <div class="d-flex">
              <div><span><i class="bi bi-telephone-inbound"></i></span></div>
              <div><p class="par-cont">+261 32 46 658 49</p></div>
            </div>
          </div>
          <div class="div2">
            <div class="d-flex">
              <div><span><i class="bi bi-envelope-open-fill"></i></span></div>
              <div><p class="par-cont">Andrianjakasantatra22@gmail.com</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const fullName = ref("");
const email_id = ref("");
const message = ref("");

const sendMail = () => {
  const params = {
    from_name: fullName.value,
    email_id: email_id.value,
    message: message.value,
  };
  if (!params.from_name || !params.email_id || !params.message) {
    alert("Veuillez remplir tous les champs");
  } else {
    emailjs.init("HuQmEMYoPl4jlxBRk");
    emailjs.send("service_6zo1xro", "template_lza292p", params).then(
      function (response) {
        alert("Success! Your message has been sent.");
        fullName.value = "";
        email_id.value = "";
        message.value = "";
      },
      function (error) {
        console.log("Error sending message:", error);
      }
    );
  }
};
</script>

<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
.col-input {
  display: flex;
  flex-direction: column;
}
textarea,
input {
  height: 50px;
  outline: none;
  border: none;
  padding: 0px 15px;
}
label {
  padding: 5px 0;
  font-size: $param;
  font-weight: 600;
  color: $colorwhite;
}
textarea {
  height: 150px;
  padding-top: 20px;
}
button {
  width: 100%;
  height: 50px;
  font-size: $param;
  border: none;
  border: 1px solid $colorwhite;
  background-color: $colorblack;
  font-weight: 600;
  color: $colorwhite;
}
.col-input-btn {
  display: flex;
  align-content: flex-end;
  flex-wrap: wrap;
  margin-top: 30px;
}
.div2 {
  width: 80%;
  margin: 20px auto;
  padding: 0;
}
span{
    text-align: center;
    display: inline-block;
    width: 50px;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    border-radius: 50%;
    color: $colorwhite;
    background-color: $colorblack;
    border: 1px solid $colorwhite;
}
i{
    font-size: 20px;
}
.par-cont{
    padding: 12px;
    font-weight: 600;
    color: $colorwhite;
}
.divis-contact{
  color: $colorwhite;
  text-align: justify;
}
</style>
