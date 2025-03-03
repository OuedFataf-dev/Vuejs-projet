<script setup>
import { useRoute } from 'vue-router';
import MonComposant from './components/MonComposant.vue';
import Mon_Composant from './components/Mon_Composant.vue';
const route = useRoute();
</script>

<script>
export default {
  methods: {
    redirectToLogin() {
      this.$router.push({ name: 'login' }); // 'login' est le nom de la route de connexion
    },
    redirectToRegister() {
      this.$router.push({ name: 'register' }); // Redirection vers Register
    },
    redirectToTarification() {
      this.$router.push({ name: 'tarification' }); // Redirection vers Register
    },
    redirectToEntreprise() {
      this.$router.push({ name: 'entreprise' }); // Redirection vers Register
    }
  },
  name: "MonComposant",
  name:"Mon_Composant"
};
</script>

<style scoped>
/* Styles spécifiques */
h1 {
  color: blue;
}
</style>
<template>
   <div id="app">
  <div v-if="route.path !== '/login'  && route.path !== '/register' && route.path !== '/tarification' && route.path !== '/entreprise'"  class="min-h-screen bg-green-900 text-white">
    <!-- Navigation -->
    <nav class=" fixed flex items-center bg-green-900 w-full justify-between text-green-300 p-4">
      <!-- Premier groupe de boutons -->
      <div class="flex space-x-4 text-sm">
          <div class="text-4xl ">
              Wise 
          </div>
        <button class="bg-green-500 text-black px-2 py-1  p-4  text-s=lg rounded-full ...">Personnel</button>
        <button class="text-sm" @click="redirectToEntreprise">Entreprise</button>
        <button class="text-sm">Plateforme</button>
      </div>

      <!-- Deuxième groupe de boutons -->
      <div class="flex space-x-2 text-sm">
      <button class="text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group" data-tooltip-target="tooltip-top">
    Fonctionnalités
</button>

<div id="tooltip-top" role="tooltip" class="absolute z-10 invisible group-hover:visible inline-block px-5 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xs opacity-0 group-hover:opacity-100 tooltip dark:bg-gray-700" style="width: 200px; height: 200px;">
    Tooltip with width 200px and height 200px
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>


         <button class="text-sm" @click=" redirectToTarification">Tarification</button>
        <button class="text-sm" >Aide</button>
        <button class="text-sm " @click="redirectToLogin">connexion</button>
        <button class="bg-green-500 text-black px-2 py-1 text-lg rounded-full ..."    @click="redirectToRegister">S'inscrire</button>
      </div>
    </nav>
    <input type="text">

    <!-- Menu secondaire -->
     
    <nav class=" fixed  text-left bg-green-800 p-4 mt-10 flex space-x-4   w-full text-green-300">
        
          <span class="font-bold">Comparer</span>
      <span>Prestataires</span>
      <span>Devises</span>
      <span>Argent pour vos voyages</span>
     
    </nav>

    <!-- Titre principal -->
    <header class="p-10 text-center text-green-200 text-4xl  mt-24 font-extrabold">
      COMPAREZ LES MEILLEURS <br /> TAUX DE CHANGE
    </header>
    <div class="p-5 text-center text-white text-2xl font-extrabold">
      Il peut être difficile de comparer les prix des transferts d'argent<br> internationaux. Nous avons créé ce tableau comparatif pour vous <br> aider à identifier les frais cachés dans les majorations de taux de <br> change.
    </div>
      <!-- Grid pour les cartes -->
<div class="flex flex-row space-x-8 justify-center ">
  <!-- Première carte -->
  <div class="bg-white rounded-6xl shadow-lg p-8 text-center text-black flex flex-col items-center w-90 ">
    <div class="w-30 h-40 bg-gray-200 rounded-full flex items-center justify-center mb-4">
      <span class="text-3xl">⬆️</span>
    </div>
    <h2 class="font-bold text-xl mb-2">COMPARAISON DES TRANSFERTS D'ARGENT</h2>
    <p class="text-gray-700 mb-4">
      Nous comparons les prestataires afin de vous permettre de trouver les meilleurs
      taux pour les transferts d'argent internationaux.
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
 



  <div>
        <router-view></router-view>
       </div>
  <div v-if="route.path !== '/login'  && route.path !== '/register' && route.path !== '/tarification' && route.path !== '/entreprise'">
     
    
    
      
    <Mon_Composant/>
  </div>

    
    
  </div>
  
</template>
