import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router'  // Assurez-vous que le fichier Router.js est bien configuré

const app = createApp(App)
app.use(router)  // Ajouter le router AVANT de monter l'application
app.mount('#app')

