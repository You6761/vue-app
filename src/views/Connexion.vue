<template>
  <div class="auth-modal">
   
    <form>
      <label for="username">Nom d'utilisateur :</label>
      <input type="text" id="username" />

      <label for="password">Mot de passe :</label>
      <input type="password" id="password" />

      <button type="submit">Se connecter</button> <br>
      <button @click="$emit('close')">Annuler</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Authentification'
};
</script>

<style scoped>
.auth-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
</style>
