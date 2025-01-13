<template>
  <div>
    <div>
      <div>
        <div>
          <form @submit.prevent="submitForm">
            <h2>{{ $t("demande") }}</h2>

            <div class="mb-3 row mt-2">
              <label for="name" class="col-sm-2 col-form-label">Nom :</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="formData.name"
                  class="form-control"
                  id="name"
                  placeholder="Joseph"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="email" class="col-sm-2 col-form-label">Email :</label>
              <div class="col-sm-10">
                <input
                  type="email"
                  v-model="formData.email"
                  class="form-control"
                  placeholder="Joseph@gmail.com"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="type" class="col-sm-2 col-form-label"
                >Service :</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="formData.type"
                  class="form-control"
                  id="type"
                  placeholder="E-commerce, Blog,  Site vitrine ..."
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="budget" class="col-sm-2 col-form-label"
                >Budget :</label
              >
              <div class="col-sm-10">
                <input
                  type="number"
                  v-model="formData.budget"
                  class="form-control"
                  id="budget"
                  placeholder="800 $"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="message" class="col-sm-2 col-form-label"
                >Message :</label
              >
              <div class="col-sm-10">
                <textarea
                  name="message"
                  id="message"
                  v-model="formData.message"
                  class="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            <!-- Alertes -->
            <div v-if="successMessage" class="alert alert-success" role="alert">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>

            <div class="div-btn-send">
              <button type="submit" class="btn btn-primary col-lg-6">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// Form data
const formData = ref({
  name: "",
  email: "",
  type: "",
  budget: "",
  message: "",
});

// Messages de statut
const successMessage = ref("");
const errorMessage = ref("");

// Soumettre les données à Airtable
const submitForm = async () => {
  const airtableAPIKey =
    "patkCxg0ZmgltSCFs.8821ab3b4896c7795957efc0fbbc69ca233078165349aa1e67883af167a2ea87"; // Remplacez par votre clé API Airtable
  const airtableBaseId = "appTVkIAf30WtN760"; // Remplacez par l'ID de votre base
  const airtableTableName = "Envoie"; // Remplacez par le nom de votre table

  const url = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`;

  const record = {
    fields: {
      Nom: formData.value.name,
      Email: formData.value.email,
      Type: formData.value.type,
      Budget: formData.value.budget,
      Message: formData.value.message,
    },
  };

  try {
    await axios.post(
      url,
      { records: [record] },
      {
        headers: {
          Authorization: `Bearer ${airtableAPIKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    // Afficher un message de succès et vider le formulaire
    successMessage.value = "Formulaire soumis avec succès !";
    errorMessage.value = "";
    formData.value = {
      name: "",
      email: "",
      type: "",
      budget: "",
      message: "",
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire :", error);
    // Afficher un message d'erreur
    errorMessage.value =
      "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.";
    successMessage.value = "";
  }
};
</script>

<style scoped lang="scss">
textarea,
input {
  font-size: 14px;
  padding: 10px 15px;
  box-shadow: none;
  border-radius: 0;
  //   color: #fafafa;
  background-color: var(--surface-color);
  color: var(--default-color);
}
textarea {
  width: 100%;
  height: 150px;
}

body.dark {
  input {
    border-color: color-mix(in srgb, #fafafa, transparent 80%);
  }
}
textarea:focus,
input:focus {
  border-color: #fafafa;
  color: var(--default-color);
  background-color: var(--surface-color);
  outline: none;
}

button {
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(to bottom, #45f3ff, #266266);
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
  padding: 12px 40px;
  padding: 12px 18px 8px 18px;
  border: none;
  transition: 0.5s;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.div-btn-send {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.div-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h2 {
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
</style>
