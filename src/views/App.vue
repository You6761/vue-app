<template>
  <div id="app">
    <!-- Header Section -->
    <header>
      <button @click="goBack">Retour</button>
      <h1>JAR' BISTRO "Terre et Mer"</h1>
      <p>Manger comme au bistro avec nos bocaux</p>
      <button @click="login">Connexion</button>
    </header>

    <!-- Navigation Section -->
    <nav>
      <div class="category">
        <button @click="showProducers('terre')">TERRE</button>
        <a href="#">Tous les producteurs terre</a>
      </div>

      <div class="category">
        <button @click="showProducers('mer')">MER</button>
        <a href="#">Tous les producteurs mer</a>
      </div>

      <div class="search">
        <input type="text" placeholder="Rechercher un producteur" />
        <button>🔍</button>
      </div>
    </nav>

    <!-- Producteur Section -->
    <section class="producer-section">
      <h2>Producteur</h2>
      <div class="producer">
        <img src="https://via.placeholder.com/150" alt="producteur" />
        <p>Jean Dupont</p>
      </div>

      <div class="producer-nav">
        <button @click="previousProducer">Précédent</button>
        <button @click="nextProducer">Suivant</button>
      </div>

      <div class="producer-slider">
        <p>Producteur, défiler</p>
        <!-- Placeholder for a future slider -->
      </div>
    </section>

    <!-- Footer Section -->
    <footer>
      <a href="#">Tous les producteurs</a>
      <a href="#">À propos</a>
      <div class="map">
        <img src="https://via.placeholder.com/100" alt="Map" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack() {
      alert('Retour à la page précédente');
    },
    login() {
      alert('Connexion...');
    },
    showProducers(category) {
      alert(`Afficher les producteurs de ${category}`);
    },
    previousProducer() {
      alert('Producteur précédent');
    },
    nextProducer() {
      alert('Producteur suivant');
    }
  }
}
</script>

<style scoped>
/* Basic reset */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Header styles */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #40E0D0; /* turquoise */
  color: white;
}

header h1 {
  margin: 0;
}

header button {
  background-color: white;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

nav {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.category, .search {
  text-align: center;
}

.search input {
  padding: 5px;
  margin-right: 10px;
}

/* Producer Section */
.producer-section {
  text-align: center;
  margin: 20px;
}

.producer img {
  border-radius: 50%;
  margin: 20px 0;
}

.producer-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.producer-nav button {
  padding: 10px 20px;
  background-color: #40E0D0;
  border: none;
  color: white;
  cursor: pointer;
}

.producer-slider {
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #40E0D0;
  border-radius: 5px;
}

/* Footer styles */
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

footer a {
  color: #40E0D0;
  text-decoration: none;
}

footer .map img {
  max-width: 100px;
  border-radius: 10px;
}
</style>
