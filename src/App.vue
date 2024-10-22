<template>
  <header class="flex text-white text-4xl bg-black p-5 gap-2">

    <RouterLink to="/" >Jar'Bistro </RouterLink>
    <nav class="flex justify-center"> 
     
     <div>
      <RouterLink to="/Terre" :class="['gap-2 text-2xl text-blue-500 hover:text-blue-700 text-white mx-8']">Terre</RouterLink>
     </div> 
     <div>
      <RouterLink to="/Mer" :class="['gap-2 text-2xl pl-5']">Mer</RouterLink>
     </div>
     <div class="flex justify-center px-4 py-2 mb-6">
      <RouterLink to="/Connexion" class="text-lg text-blue-500 hover:underline">Connexion</RouterLink>
    </div>
    
     
    </nav>
  </header>
  <div class="container"><RouterView/></div>
</template>
<script setup>
import { RouterLink,RouterView } from 'vue-router';
</script>
