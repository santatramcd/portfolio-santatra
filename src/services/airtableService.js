import axios from "axios";

const baseID = "app5thzB6JlXS5M3y"; 
const tableName = "Project"; 
const apiKey = "patz6TAtGlAeL2lfU.d422f033459c1f8942b7b069f20d40af21270f68f692197e53e2568dac07cfec"; 

const airtableURL = `https://api.airtable.com/v0/${baseID}/${tableName}`;

export const fetchAirtableData = async () => {
  try {
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data.records; // Les données sont dans 'records'
  } catch (error) {
    if (error.response) {
      // L'erreur provient de la réponse de l'API
      console.error("Erreur API :", error.response.data);
    } else if (error.request) {
      // La requête a été envoyée mais il n'y a pas de réponse
      console.error("Pas de réponse de l'API", error.request);
    } else {
      // Une autre erreur est survenue lors de la préparation de la requête
      console.error("Erreur lors de la configuration de la requête :", error.message);
    }
    throw error;
  }
};
