import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Terre from '../views/Terre.vue';
import Mer from '../views/Mer.vue';
import Producteur from '../views/Producteur.vue';
import Final from '../views/Final.vue';
import Connexion from '../views/Connexion.vue';
import APropo from '../views/APropo.vue';
import Map from '../views/Map.vue';


// Définition des routes de l'application
const routes = [
  { path: '/', component: HomeView },
  { path: '/Mer', component: Mer, name: "Mer" },
  { path: '/Terre', component: Terre, name: "Terre" },
  { path: '/Map', component: Map },
  { path: '/APropo', component: APropo },
  { path: '/Producteur', component: Producteur },
  { path: '/Connexion', component: Connexion },
  { path: '/Final', component: Final },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Exporter le routeur
export default router;
