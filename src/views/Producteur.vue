<template>
  <div class="flex flex-col items-center justify-center py-10">
    <!-- Navigation des producteurs -->
    <div class="flex items-center mb-6">
      <!-- Bouton "Précédent" avec icône -->
      <button @click="previousProducer" class="bg-gray-300 px-4 py-2 rounded-l-lg hover:bg-gray-400 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Précédent
      </button>

      <!-- Image du producteur au centre -->
      <div class="mx-4">
        <img :src="currentProducerImage" alt="Image" class="h-40 w-40 rounded-full border border-gray-400 shadow-lg" />
      </div>

      <!-- Bouton "Suivant" avec icône -->
      <button @click="nextProducer" class="bg-gray-300 px-4 py-2 rounded-r-lg hover:bg-gray-400 flex items-center">
        Suivant
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Nom du producteur cliquable pour afficher le descriptif -->
    <p class="text-lg font-medium text-center cursor-pointer  hover:text-blue-500" @click="toggleDescription">
      {{ currentProducerName }}
    </p>

    <!-- Descriptif du producteur -->
    <div v-if="showDescription" class="mt-4 px-6 py-4 bg-gray-100 rounded-lg shadow">
      <p class="text-gray-700">{{ currentProducerDescription }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Gestion des producteurs
const currentProducer = ref(0);
const showDescription = ref(false);
const producers = [
  { name: "Jean Dupont", image: "/image/tete.jpeg", description: "Jean Dupont est un producteur renommé de pommes de terre biologiques." },
  { name: "Marie Martin", image: "/image/terre.jpeg", description: "Marie Martin cultive des légumes frais et des herbes aromatiques." },
  { name: "Paul Bernard", image: "/image/tetes.jpeg", description: "Paul Bernard est un éleveur de volailles respectueux de l'environnement." }
];

// Calculs des informations du producteur actuel
const currentProducerName = computed(() => producers[currentProducer.value].name);
const currentProducerImage = computed(() => producers[currentProducer.value].image);
const currentProducerDescription = computed(() => producers[currentProducer.value].description);

// Fonctions de navigation et affichage de description
const nextProducer = () => {
  currentProducer.value = (currentProducer.value + 1) % producers.length;
  showDescription.value = false;
};

const previousProducer = () => {
  currentProducer.value = (currentProducer.value - 1 + producers.length) % producers.length;
  showDescription.value = false;
};

const toggleDescription = () => {
  showDescription.value = !showDescription.value;
};
</script>

<style scoped>
/* Ajout d'une ombre à l'image */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>

