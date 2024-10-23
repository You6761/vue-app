<template>
  <div class="propo-section">
    <h2>À propos de Jar' Bistro</h2>
    <p>Informations sur le site, l'entreprise...</p>
    <p>Youssef le voleur des voleurs</p>
    <p>Mets ta carte et oupss ya plus rien</p>
   <nav class="mt-4 md:mt-0 flex space-x-6">
    <RouterLink to="/Propo" class="hover:text-teal-200 transition">À Propos</RouterLink>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'Propo'
};
</script>

<style scoped>
.propo-section {
  padding: 20px;
}
</style>
