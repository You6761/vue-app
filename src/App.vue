<template>
  <header class="flex space-x-4 justify-center text-white text-4xl bg-black p-5 gap ">

    <RouterLink to="/" >Jar'Bistro </RouterLink>
    <nav class="flex justify-right"> 
    
      <div>
          <RouterLink to="/Terre" :class="['gap-2 text-2xl text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline']">Terre</RouterLink>
      </div> 
      <div>
          <RouterLink to="/Mer" :class="['gap-2 text-2xl  text-blue-500 hover:text-blue-700 text-white mx-8 hover:underline']">Mer</RouterLink>
     </div>
     <br>
     <br>
     <div class="flex px-4 py-2 mb-6 ">
          <RouterLink to="/Connexion" class="text-lg text-blue-500 hover:underline">Connexion</RouterLink>
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
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

</style>
