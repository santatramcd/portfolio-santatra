<template>
  <div>
    <div class="divi">
      <form class="formulaire">
        <div class="divii">
          <div class="div1">
            <div class="input h11">
              <h1>{{ $t("sendmail") }}</h1>
            </div>
            <div class="input">
              <input
                class="inpt"
                type="text"
                v-model="fullName"
                placeholder="Full Name"
                required
              />
            </div>
            <div class="input">
              <input
                class="inpt"
                v-model="email_id"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="input">
              <input
                class="inpt"
                v-model="message"
                placeholder="Message"
                required
              />
            </div>
            <div class="input">
              <button class="inptaj" @click="sendMail">Send</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="mt-5" style="color: #eee">
      <div class="row">
        <div class="col-lg-4 mt-5">
          <div class="div-icn-contact">
            <div>
              <span
                ><i class="bi bi-telephone-inbound" style="font-size: 3rem"></i
              ></span>
            </div>
            <div>
              <h5>Whatsapp</h5>
              <p>+261 32 46 658 49</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-5">
          <div class="div-icn-contact">
            <div>
              <span
                ><i class="bi bi-envelope-at" style="font-size: 3rem"></i
              ></span>
            </div>
            <div>
              <h5>Email</h5>
              <p>Andrianjakasantatra22@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-5">
          <div class="div-icn-contact">
            <div>
              <span><i class="bi bi-geo-alt" style="font-size: 3rem"></i></span>
            </div>
            <div>
              <h5>Adresse</h5>
              <p>Antananarivo, Madagascar</p>
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
    console.log("Veuillez remplir tous les champs");
  } else if (!/@/.test(params.email_id)) {
    console.log(
      "L'adresse e-mail est invalide. Veuillez saisir une adresse e-mail valide."
    );
  } else {
    emailjs.init("HuQmEMYoPl4jlxBRk");
    emailjs.send("service_6zo1xro", "template_lza292p", params).then(
      function (response) {
        alert("Success! Your message has been sent.", response);
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
.divi {
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 100vh;
  background-color: #23242a;
  margin-top: 100px;
}

.formulaire {
  position: relative;
  width: 50%;
  height: 400px;
  //    background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
}

/* deb */
.formulaire::before {
  content: "";
  position: absolute;
  top: -50%;
  // left: 0;
  left: -200px;
  width: 380px;
  height: 420px;
  background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
}

.formulaire::after {
  content: "";
  position: absolute;
  top: -50%;
  // left: 0;
  left: -200px;
  width: 380px;
  height: 420px;
  background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
  animation-delay: -3s;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* fin */
.div1 {
  width: 70%;
  height: 350px;
  margin: 25px auto;
  position: relative;
  z-index: 100;
}

.divii {
  width: 99.3%;
  height: 395px;
  background-color: #28292d;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  // margin-top: -23px;
  position: relative;
  z-index: 100;
  margin-top: 2px;
  padding-top: 29px;
}

.input {
  width: 100%;
  height: 60px;
}

.h11 {
  text-align: center;
}

h1 {
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
  color: #45f3ff;
  padding-top: 15px;
  text-shadow: 2px 5px 4px;
  text-transform: capitalize;
}

.inptaj,
.inpt {
  width: 100%;
  height: 40px;
  outline: none;
}

.inpt {
  padding-left: 10px;
  color: #fff;
  background-color: #28292d;
  border: none;
  border-bottom: 2px solid #45f3ff;
}

.inpt:focus {
  background-color: #45f3ff;
  color: #23242a;
  border: none;
}

.inptaj {
  //  width: 30%;
  padding: 0 5px;
  color: #23242a;
  border-radius: 8px;
  border: none;
  background-color: #45f3ff;
  font-weight: bold;
}
.div-icn-contact {
  padding: 15px;
  border: 1px solid #eee;
}
@media only screen and (max-width: 940px) {
  .formulaire {
    width: 100%;
  }
}
@media only screen and (max-width: 380px) {
  .divii {
    width: 98.3%;
  }
}
</style>
