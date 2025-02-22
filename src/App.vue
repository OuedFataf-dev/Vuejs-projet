<script setup>
import MonComposant from './components/MonComposant.vue';
import Mon_Composant from './components/Mon_Composant.vue';
</script>

<script>
export default {
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
  <div class="min-h-screen bg-green-900 text-white">
    <!-- Navigation -->
    <nav class="flex items-center justify-between p-4">
      <!-- Premier groupe de boutons -->
      <div class="flex space-x-4 text-sm">
          <div class="text-4xl ">
              Wise 
          </div>
        <button class="bg-green-500 text-black px-2 py-1 text-s=lg rounded-full ...">Personnel</button>
        <button class="text-sm">Entreprise</button>
        <button class="text-sm">Plateforme</button>
      </div>

      <!-- Deuxième groupe de boutons -->
      <div class="flex space-x-2 text-sm">
         <button class="text-sm">Fonctionnalité</button>
        <button class="text-sm">Tarification</button>
        <button class="text-sm">connexion</button>
        <button class="bg-green-500 text-black px-2 py-1 text-lg rounded-full ...">S'inscrire</button>
      </div>
    </nav>
    <input type="text">

    <!-- Menu secondaire -->
    <div class="bg-green-800 p-4 flex space-x-4 text-green-300">
      <span class="font-bold">Comparer</span>
      <span>Prestataires</span>
      <span>Devises</span>
      <span>Argent pour vos voyages</span>
    </div>

    <!-- Titre principal -->
    <header class="p-10 text-center text-green-200 text-8xl font-extrabold">
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
  <div class="bg-white rounded md:rounded-lg ... shadow-lg p-8 text-center text-black flex flex-col items-center w-90">
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
    <MonComposant />
      
  </div>

     <div>
      <Mon_Composant/>
     </div>
   

  
</template>
