<template>
  <div class="flex flex-col items-center justify-center py-10">
    <!-- Titre principal -->
    <h1 class="text-3xl font-bold mb-6">Producteur</h1>
    
    <!-- Section de navigation avec boutons "Précédent" et "Suivant" autour de l'image -->
    <div class="flex items-center mb-6">
      <!-- Bouton "Précédent" -->
      <button @click="previousProducer" class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 border border-gray-500 shadow">
        Précédent
      </button>

      <!-- Image du producteur -->
      <div class="mx-4">
        <img :src="currentProducerImage" alt="Producteur" class="h-40 w-40 rounded-full border border-gray-400 shadow-lg" />
      </div>

      <!-- Bouton "Suivant" -->
      <button @click="nextProducer" class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 border border-gray-500 shadow">
        Suivant
      </button>
    </div>

    <!-- Nom du producteur -->
    <p class="text-lg font-medium">{{ currentProducerName }}</p>

    <!-- Liens vers les producteurs Terre et Mer -->
    <div class="flex gap-8 mt-6">
      <RouterLink to="/all-terre" class="text-blue-500 hover:underline">Tous les producteurs Terre</RouterLink>
      <RouterLink to="/all-mer" class="text-blue-500 hover:underline">Tous les producteurs Mer</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Gestion des producteurs
const currentProducer = ref(0);
const producers = [
  { name: "Jean Dupont", image: "https://via.placeholder.com/150" },
  { name: "Marie Martin", image: "https://via.placeholder.com/150" },
  { name: "Paul Bernard", image: "https://via.placeholder.com/150" }
];

const currentProducerName = computed(() => producers[currentProducer.value].name);
const currentProducerImage = computed(() => producers[currentProducer.value].image);

const nextProducer = () => {
  currentProducer.value = (currentProducer.value + 1) % producers.length;
};

const previousProducer = () => {
  currentProducer.value = (currentProducer.value - 1 + producers.length) % producers.length;
};
</script>

<style scoped>
/* Ombre pour les boutons et l'image */
.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.shadow-lg {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Ajout de la couleur de bordure pour un meilleur contraste */
.border-gray-500 {
  border-color: #6b7280;
}
</style>
