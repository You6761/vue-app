<template>
  
  <div id="app">
  </div>
  
  <div class="terre-section">
    <!-- Lien vers tous les producteurs de la Terre -->
    <RouterLink to="/all-terre" class="text-blue-500 hover:underline mb-4 block text-center">
      Tous les producteurs Terre
    </RouterLink>


    <!-- Image du producteur -->
    <div class="image-container text-center mb-6 shadow-xl">
      <img 
        src="https://medias.reussir.fr/action-agricole-picarde/2023-11/GN2OX9OF1_web.jpg" 
        alt="Image Producteur Terre" 
        class="rounded-lg w-full md:w-1/2 mx-auto shadow-lg" />
    </div>

    <!-- Liste des producteurs de la Terre -->
    <ul class="producer-list text-center space-y-4">
      <li class="text-lg font-semibold ">Jean Gerand, Producteur de lait depuis 2005, Bretagne</li>
      <li class="text-lg font-semibold">Jerome Leroy, Producteur de bocaux de légumes depuis 2008, France</li>
      <li class="text-lg font-semibold">Philipe Plein, Producteur de charcuterie depuis 2004, Corse</li>
    </ul>
  </div>
</template>


<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;}
  header {
    background-color: #42b983;
    padding: 10px;
    color: white;
  }
  
  header nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  header nav ul li {
    display: inline;
    margin: 0 10px;
  }
  
  header a {
    color: white;
    text-decoration: none;
  }
  
  header a:hover {
    text-decoration: underline;
  }

.terre-section {
  padding: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  
}

.producer-list {
  margin-top: 20px;
}

.producer-list li {
  color: #333;
}

@media (min-width: 768px) {
  .image-container img {
    width: 50%; /* Ajuste l'image à 50% de la largeur de l'écran sur les grands écrans */
  }
}
</style>


