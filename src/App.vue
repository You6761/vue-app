<template>
  <!-- Bouton retour et Connexion -->
  <div class="flex justify-between px-4 py-2 mb-6">
    <router-link to="/" class="text-lg text-blue-500 hover:underline">Retour</router-link>
    <router-link to="/Connexion" class="text-lg text-blue-500 hover:underline">Connexion</router-link>
  </div>

  <!-- Titre principal -->
  <h1 class="text-4xl font-bold mb-4 text-center color: to-blue-600">Jar'Bistro "Terre et Mer"</h1>

  <!-- Sous-titre -->
  <div class="text-lg text-center mb-6  color: to-blue-600">Manger comme au bistro avec nos bocaux</div>

  <!-- Menu Terre et Mer -->
  <header class="flex justify-between items-center mb-8 px-4">
    
    <Routerlink to="/Terre" class="text-lg bg-gray-200 p-2 rounded hover:bg-gray-300">Terre</Routerlink>
    <!-- Recherche -->
    <div class="relative">
      <input type="text" placeholder="Recherche" class="border border-gray-300 p-2 rounded w-64" />
      <button class="absolute right-2 top-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 19.5L16 16m1-4A5 5 0 1112 7a5 5 0 015 5z" />
        </svg>
      </button>
      <button class="absolute right-10 top-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10V2M10 2v8m0 0a4 4 0 100 8 4 4 0 100-8zm0 0V2m0 0a8 8 0 108 8 8 8 0 10-8-8z" />
        </svg>
      </button>
    </div>
    
    <RouterLink to="/Mer" class="text-lg bg-gray-200 p-2 rounded hover:bg-gray-300">Mer</RouterLink>
    
  </header>

  <!-- Lien vers producteurs Terre et Mer -->
  <div class="flex justify-between mb-6 px-4">
    <router-link to="/all-terre" class="text-blue-500 hover:underline">Tous les producteurs Terre</router-link>
    <router-link to="/all-mer" class="text-blue-500 hover:underline">Tous les producteurs Mer</router-link>
  </div>

  <!-- Section Producteur -->
  <div class="flex flex-col items-center mb-6">
    <!-- Navigation des producteurs -->
    <div class="flex items-center justify-center mb-4">
      <!-- Bouton "Précédent" -->
      <button @click="previousProducer" class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 mr-4">Précédent</button>

      <!-- Image du producteur -->
      <div>
        <img :src="currentProducerImage" alt="Producteur" class="h-40 w-40 rounded-full border border-gray-400" />
      </div>

      <!-- Bouton "Suivant" -->
      <button @click="nextProducer" class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 ml-4">Suivant</button>
    </div>

    <!-- Nom du producteur -->
    <p class="text-lg font-medium mb-4">{{ currentProducerName }}</p>
  </div>

  <!-- Footer avec liens -->
  <footer class="bg-gray-800 text-white py-4 mt-8">
    <nav class="flex justify-between items-center px-4">
      <RouterLink to="/all-producteurs" class="hover:underline text-lg">Tous les producteurs</RouterLink>
      <RouterLink to="/APropo" class="hover:underline text-lg">À Propos</RouterLink>
    </nav>
  </footer>

  <!-- Modal Authentification -->
  <Connexion v-if="showAuth" @close="toggleAuth" />
  <RouterView/>
</template>

<script setup>
import { ref, computed } from "vue";
import Connexion from "./views/Connexion.vue";
import Terre from "./views/Terre.vue";
import Mer from "./views/Mer.vue";
import { RouterLink,RouterView } from "vue-router";


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
