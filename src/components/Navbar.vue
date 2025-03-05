<template>
    <nav class="fixed top-0 left-0 w-full z-[9999] flex items-center bg-green-900 justify-between text-green-300 p-4 shadow-md">
      <!-- Premier groupe de boutons -->
      <div class="flex space-x-4 text-sm">
        <div class="text-4xl">Wise</div>
        <button class="bg-green-500 text-black px-4 py-2 rounded-full" @click="$emit('redirect-to-Personne')">
          Personnel
        </button>
        <button class="text-sm" @click="$emit('redirect-to-entreprise')">Entreprise</button>
        <button class="text-sm">Plateforme</button>
      </div>
  
      <!-- Deuxième groupe de boutons -->
      <div class="flex space-x-2 text-sm">
        <button
          class="text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center"
        >
          Fonctionnalités
        </button>
        <button class="text-sm" @click="$emit('redirect-to-tarification')">Tarification</button>
        <button class="text-sm">Aide</button>
        <button class="text-sm" @click="$emit('redirect-to-login')">Connexion</button>
        <button class="bg-green-500 text-black px-4 py-2 text-lg rounded-full" @click="$emit('redirect-to-register')">
          S'inscrire
        </button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  