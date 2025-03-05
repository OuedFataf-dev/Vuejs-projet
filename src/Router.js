import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue'
; // Assurez-vous que le chemin est correct
import MonComposant from './components/MonComposant.vue';
import register from './components/Register.vue';
import TarificationComponent from './components/TarificationComponent.vue';
import PersoneComposant from './components/PersoneComposant.vue';

import EntreprisComponent from './components/EntreprisComponent.vue';

const routes = [
  { path: '/', component: MonComposant, name: 'home' },  // Page d'accueil
  { path: '/login', component: Login, name: 'login' },  // Page de login
  { path: '/register', component:register, name: 'register' }, 
  { path: '/tarification', component:TarificationComponent, name: 'tarification' }, 
  { path: '/entreprise', component:EntreprisComponent, name: 'entreprise' }, 
  { path: '/Personne', component:PersoneComposant, name: 'Personne' }, 
   // Page de login
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
