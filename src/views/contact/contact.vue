<template>
  <div>
    <div class="container">
      <div class="mt-5 divis-contact">
        <h1>{{ $t("contact") }}</h1>
        <p>
          {{ $t("creation") }}
        </p>
      </div>
      <div>
        <a @click="copierTexte" class="a-down">{{ $t("copiemail") }}</a>
      </div>
      <div>
        <Form />
      </div>
    </div>
    <!--  -->

    <!--  -->
  </div>
</template>

<script setup>
import Form from "./form.vue";
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
const copierTexte = () => {
  const texteACopier = "andrianjakasantatra22@gmail.com";
  const tempInput = document.createElement("input");
  tempInput.value = texteACopier;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Texte copié dans le presse-papiers : " + texteACopier);
}
</script>

<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #eee);
$param: 20px;
h1 {
  font-size: 30px;
}
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
span {
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
i {
  font-size: 20px;
}
.par-cont {
  padding: 12px;
  font-weight: 600;
  color: $colorwhite;
}
.divis-contact {
  color: $colorwhite;
  text-align: justify;
}
.a-down {
  text-decoration: none;
  /* padding: 12px; */
  background-color: #45f3ff;
  color: black;
  font-weight: 500;
  padding: 5px 8px;
  display: inline-block;
  cursor: pointer;
}
</style>
