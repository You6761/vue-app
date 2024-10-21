<template>
  <div class="mer-section">
    <!-- Lien vers tous les producteurs de la Mer -->
    <RouterLink to="/all-mer" class="text-blue-500 hover:underline mb-4 block text-center">
      Tous les producteurs Mer
    </RouterLink>

    <!-- Image du producteur -->
    <div class="image-container text-center mb-6">
      <img 
        src="https://static.actu.fr/uploads/2023/03/3b1c26b5f5046bf1c26b5f504242c2v-960x640.jpg" 
        alt="Image Producteur Mer" 
        class="rounded-lg w-full md:w-1/2 mx-auto shadow-lg" />
    </div>

    <!-- Liste des producteurs de la Mer -->
    <ul class="producer-list text-center space-y-4">
      <li class="text-lg font-semibold">Jean Pascal, Producteur de Crevettes</li>
      <li class="text-lg font-semibold">Jerome Legu, Producteur de Sardines</li>
      <li class="text-lg font-semibold">Philipe Gros, Producteur de Harengs</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Mer',
};
</script>

<style scoped>
.mer-section {
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
