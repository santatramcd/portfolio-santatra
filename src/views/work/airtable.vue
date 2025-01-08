<template>
  <div>
    <!-- <h1>Données depuis Airtable</h1>
        <ul>
          <li v-for="record in records" :key="record.id">
            {{ record.fields.Name }} - {{ record.fields.Description }}
            <img
              v-if="record.fields.Photos && record.fields.Photos[0]"
              :src="record.fields.Photos[0].url"
              :alt="'Image de ' + record.fields.Name"
              width="200"
            />
          </li>
        </ul> -->
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue";
// import { fetchAirtableData } from "@/services/airtableService";
// const records = ref([]);
// onMounted(async () => {
//   try {
//     records.value = await fetchAirtableData();
//   } catch (error) {
//     console.error("Erreur lors du chargement des données :", error);
//   }
// });
</script>

<style lang="scss"></style>
