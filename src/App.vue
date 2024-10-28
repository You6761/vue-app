<template>
  <header class="flex space-x-4 text-white justify-center text-4xl bg-black p-5 gap">
    <RouterLink to="/">Jar'Bistro</RouterLink>
    <div class="relative">
      <input type="text" placeholder="Recherche"
        class="border text-black border-gray-300 p-2 rounded w-50 h-10 text-base" />
      <button class="absolute right-2 top-2 flex flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 text-gray-400" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M19.5 19.5L16 16m1-4A5 5 0 1112 7a5 5 0 015 5z" />
        </svg>
      </button>
    </div>
    <nav class="flex">
      <div>
        <RouterLink to="/Terre" :class="[
          'gap-2 text-2xl text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline']">Terre</RouterLink>
        <RouterLink to="/Mer" :class="[
          'gap-2 text-2xl text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline']">Mer</RouterLink>
        <RouterLink to="/Producteur" :class="[
          'gap-2 text-2xl text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline']">Producteur</RouterLink>
        <RouterLink to="/Connexion" class="text-lg text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline">
          Newsletter</RouterLink>
      </div>
    </nav>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<style scoped lang="scss">
$header-gradient-start: #8B4513;
$header-gradient-mid1: #A0522D;
$header-gradient-mid2: #D2B48C;
$header-gradient-end: #4682B4;
$header-color: #ffffff;
$container-bg-color: hsl(54, 90%, 96%);

header {
  background: linear-gradient(90deg, $header-gradient-start, $header-gradient-mid1, $header-gradient-mid2, $header-gradient-end);
  color: $header-color;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  // Media Query pour grands écrans
  @media (min-width: 1024px) {
    padding: 30px; // Augmente le padding sur les grands écrans
  }
}

.container {
  background-color: $container-bg-color;
  padding: 20px;

  // Media Query pour appareils mobiles
  @media (max-width: 768px) {
    padding: 10px; // Réduit le padding sur les petits écrans
  }

  // Media Query pour tablettes
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 15px; // Ajuste le padding sur les tablettes
  }

  // Media Query pour grands écrans
  @media (min-width: 1024px) {
    padding: 40px; // Augmente le padding sur les grands écrans
  }
}
</style>
