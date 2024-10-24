<template>
  
  <header class="flex space-x-4  text-white justify-center text-4xl bg-black p-5 gap ">
    <RouterLink to="/">Jar'Bistro </RouterLink>
    <div class="relative ">
     
    <input type="text" placeholder="Recherche" class="border text-black border-gray-300 p-2 rounded w-50 h-10 text-base" />
    
    <button class="absolute right-2 top-2 flex flex-col ... ">
      <svg xmlns="http://www.w3.org/2000/svg" class=" w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 19.5L16 16m1-4A5 5 0 1112 7a5 5 0 015 5z" />
      </svg>
    </button>
   
    </div>
      <nav class="flex"> 
        <div>
          <RouterLink to="/Terre" :class="['gap-2 text-2xl text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline']">Terre</RouterLink>
          <RouterLink to="/Mer" :class="['gap-2 text-2xl  text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline']">Mer</RouterLink>
          <RouterLink to="/Producteur" :class="['gap-2 text-2xl text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline']">Producteur</RouterLink>
          <RouterLink to="/Connexion" class="text-lg text-blue-500  hover:text-blue-700 text-white mx-8  hover:underline">Newsletter</RouterLink>
        </div>
      </nav>
  </header>
  <div class="container"><RouterView/></div>
  
</template>
<script setup>
import { RouterLink,RouterView } from 'vue-router';

</script>
<style scoped>
header {
  background: linear-gradient(90deg, #8B4513, #D2B48C, #4682B4);
 
  
  color: #1c1212;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

</style>
