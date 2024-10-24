<template>
  <!-- Menu Terre et Mer -->
  <header class="flex justify-between items-center mb-8 px-4" mx-8>
      <button class="absolute right-2 top-2 flex flex-col ... ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 19.5L16 16m1-4A5 5 0 1112 7a5 5 0 015 5z" />
        </svg>
      </button>
  </header>
  <!-- Lien vers producteurs Terre et Mer -->
  <div class="flex justify-between mb-6 px-4"></div>
<Caroussel/>
<Newsletter/>

  <footer class="bg-gray-800 text-white py-4 mt-8">
    <nav class="flex justify-between items-center px-4">
     
      <RouterLink to="/APropo" class="hover:underline text-lg">À Propos</RouterLink>
    </nav>
  </footer>
</template>
<script setup>
import { ref, computed } from "vue";
import Newsletter from "./Connexion.vue";

import { RouterLink } from "vue-router";
import Caroussel from "./Caroussel.vue";
const showAuth = ref(false);

// Gestion des producteurs
const currentProducer = ref(0);
const producers = [
  { name: "Jean Dupont", image: "image1.jpg" },
  { name: "Marie Martin", image: "image2.jpg" },
  { name: "Paul Bernard", image: "image3.jpg" }
];

const currentProducerName = computed(() => producers[currentProducer.value].name);
const currentProducerImage = computed(() => producers[currentProducer.value].image);

const nextProducer = () => {
  currentProducer.value = (currentProducer.value + 1) % producers.length;
};

const previousProducer = () => {
  currentProducer.value = (currentProducer.value - 1 + producers.length) % producers.length;
};

const toggleAuth = () => {
  showAuth.value = !showAuth.value;
};
</script>

<style scoped>
/* Aucun style additionnel, tout est géré par TailwindCSS */
</style>
