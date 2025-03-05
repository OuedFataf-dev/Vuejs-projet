<template>
  <div id="app">
    <!-- Affichage conditionnel de la navbar et du contenu selon la route -->
    <div
      v-if="route.path !== '/login' &&
           route.path !== '/register' &&
           route.path !== '/tarification' &&
           route.path !== '/entreprise' && 
           route.path !== '/Personne'"
           
      class="min-h-screen bg-green-900 text-white"
    >
      <!-- Intégration de la Navbar -->
      <Navbar
        @redirectToLogin="redirectToLogin"
       
        @redirectToRegister="redirectToRegister"
        @redirectToTarification="redirectToTarification"
        @redirectToEntreprise="redirectToEntreprise"
         @redirectToPersonne="redirectToPersonne"
      />

      <!-- Autres éléments de votre page, par exemple un input -->
      <input type="text" />

      <!-- Menu secondaire, titres, contenu, etc. -->
      <nav class="fixed text-left bg-green-800  z-50 p-4 mt-10 flex space-x-4 w-full text-green-300">
        <span class="font-bold">Comparer</span>
        <span>Prestataires</span>
        <span>Devises</span>
        <span>Argent pour vos voyages</span>
      </nav>

      <header class="p-10 text-center text-green-200 text-4xl mt-24 font-extrabold">
        COMPAREZ LES MEILLEURS <br /> TAUX DE CHANGE
      </header>
      <div class="p-5 text-center text-white text-2xl font-extrabold">
        Il peut être difficile de comparer les prix des transferts d'argent<br />
        internationaux. Nous avons créé ce tableau comparatif pour vous <br />
        aider à identifier les frais cachés dans les majorations de taux de <br />
        change.
      </div>

      <!-- Exemple de grid pour les cartes -->
      <div class="flex flex-row space-x-8 justify-center">
        <!-- Première carte -->
        <div class="bg-white rounded-6xl shadow-lg p-8 text-center text-black flex flex-col items-center w-90">
          <div class="w-30 h-40 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span class="text-3xl">⬆️</span>
          </div>
          <h2 class="font-bold text-xl mb-2">
            COMPARAISON DES TRANSFERTS D'ARGENT
          </h2>
          <p class="text-gray-700 mb-4">
            Nous comparons les prestataires afin de vous permettre de trouver les
            meilleurs taux pour les transferts d'argent internationaux.
          </p>
          <a href="#" class="text-green-700 font-semibold hover:underline">
            Comparer les transferts d'argent
          </a>
        </div>

        <!-- Deuxième carte -->
        <div class="bg-white shadow-lg p-8 text-center text-black flex flex-col items-center w-90">
          <div class="w-30 h-40 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span class="text-3xl">🧳</span>
          </div>
          <h2 class="font-bold text-xl mb-2">ARGENT POUR VOS VOYAGES</h2>
          <p class="text-gray-700 mb-4">
            Vous voyagez à l'étranger ? Nous analysons divers prestataires pour identifier
            celui qui propose le meilleur taux de change lorsque vous échangez des devises.
          </p>
          <a href="#" class="text-green-700 font-semibold hover:underline">
            Comparer les options pour optimiser votre argent en voyage
          </a>
        </div>
      </div>
    </div>

    <!-- Vue de route -->
    <router-view></router-view>

    <!-- Autre composant affiché conditionnellement -->
    <div
      v-if="route.path !== '/login' &&
           route.path !== '/register' &&
           route.path !== '/tarification' &&
           route.path !== '/entreprise'&&
           route.path !== '/Personne'"
    >
      <Mon_Composant />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Mon_Composant from './components/Mon_Composant.vue';

const route = useRoute();
const router = useRouter();

function redirectToLogin() {
  router.push({ name: 'login' });
}
function redirectToRegister() {
  router.push({ name: 'register' });
}
function redirectToTarification() {
  router.push({ name: 'tarification' });
}
function redirectToEntreprise() {
  router.push({ name: 'entreprise' });
}
function redirectToPersonne() {
  router.push({ name: 'Personne' });
}
</script>

<style scoped>
/* Vos styles spécifiques ici */
</style>
