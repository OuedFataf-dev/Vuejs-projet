
<script setup>
import Navbar from './Navbar.vue';
import FooterComponent from './FooterComponent.vue'




import { useRoute, useRouter } from 'vue-router';



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
</script>







<template>



<Navbar
        @redirectToLogin="redirectToLogin"
        @redirectToRegister="redirectToRegister"
        @redirectToTarification="redirectToTarification"
        @redirectToEntreprise="redirectToEntreprise"
      />

  <div class="bg-green-700 h-164 w-full">
  
          <div class="flex-col justify-center items-center text-center py-40 ">

                 <div class="font-semibold text-8xl ">
                  Le compte Business  <br> international sans tracas


                 </div>

                 <div class="text-xl mt-5">
                      Inscrivez-vous au compte entreprise sans frais cachés,<br> taux élevés ou frais mensuels. Payez vos employés,<br> br
                       recevez des paiements et gérez des flux de trésorerie à <br>  l'étranger, le tout dans un seul endroit.
                     </div>

                    
                     
                        <div class="mt-10">
                          <button class="bg-green-500 text-black px-2 py-1  h-12 w-70  p-4   text-s=lg rounded-full ...">Ouvrir un compte aujourd'hui</button>
                        </div>
          </div>                                                                          


  </div>




          <div class=" flex  text-center bg-white h-180  w-full">      
             <div class="flex text-center   p-25 ml-20 mt-18  ">

              <div class="w-100  h-105 bg-white shadow-lg rounded-2xl p-2">
    <h2 class="text-gray-700 font-bold text-lg">Vous envoyez exactement</h2>
    
    <!-- Montant envoyé -->
    <div class="flex  border rounded-lg p-3 mt-2">
      <input v-model="amount" type="number" class="w-full text-xl font-semibold outline-none" />
      <span class="ml-2 text-lg font-bold">EUR</span>
    </div>

    <!-- Détails des frais -->
    <div class="mt-4 text-gray-600 space-y-2">
      <div class="flex justify-between">
        <span>Frais de virement bancaire</span>
        <span class="text-green-600 font-bold">0 EUR</span>
      </div>
      <div class="flex justify-between">
        <span>Nos frais</span>
        <span class="font-bold">{{ fees }} EUR</span>
      </div>
      <div class="flex justify-between font-bold">
        <span>Total des frais</span>
        <span>{{ fees }} EUR</span>
      </div>
      <div class="flex justify-between mt-2">
        <span>Montant total converti</span>
        <span class="font-bold">{{ convertedAmount }} EUR</span>
      </div>
      <div class="flex justify-between mt-2">
        <span class="text-green-600 font-bold">Taux garanti (73 heures)</span>
        <span class="font-bold">{{ exchangeRate }}</span>
      </div>
    </div>

    <!-- Résultat conversion -->
    <div class="mt-6 p-4 border rounded-lg bg-gray-100 flex justify-between items-center">
      <span class="text-lg font-bold">Le bénéficiaire reçoit</span>
      <span class="text-xl font-bold">{{ recipientAmount }} GBP</span>
    </div>
  </div>   
            <div class=" px-20 -mt-15 p-15 py-20 text-right text-end justify-end items-end">
                

                 <div class="font-bold text-2xl  ">Payez des personnes en un clic et <br> économisez de l'argent</div>

                        <div class="mt-5"> Effectuez des paiements internationaux et économisez de <br> l'argent avec Wise. Choisissez parmi plus de 70 pays et payez <br> vos employés ou vos fournisseurs à l'étranger, sans <br> frais cachés ni majorations de taux de change.</div>


                            <div class="mt-10"><button class="bg-green-500 text-black px-2 py-1  p-4  h-12 w-70   text-s=lg rounded-full ..."   >Ouvrez un compte aujourd'hui</button></div>
                 
            </div>
             </div>

              
            </div>


            <div  class="bg-gray-200  w-full h-200">

                   <div class="flex">
                           
                               
                         

                         <div class="flex-col">
                          <div class=" text-2xl font-bold px-30 mt-25 py-7 ">
                            Recevez des <br> paiements <br> plus rapidement
                          </div>
                             <div class="text-xl mt-5 px-30">
                              Avec Wise Business, vous pouvez obtenir des <br> numéros de compte locaux dans 9 devises <br> différentes. Partager ces coordonnées avec vos <br> clients est un moyen facile et gratuit de recevoir des <br> paiements. 50 % des paiements sont instantanés ou <br> arrivent dans l'heure.
                             </div>



                             <div class="px-30  mt-5">
                              <button class="bg-green-500 text-black px-2 py-1  h-12 w-70  p-4   text-s=lg rounded-full ...">ouvrir un compte aujourd'hui</button>
                             </div>

                               <div class=" flex  gap-0.5">
                                    <div class="text-sm mt-5 px-10 font-bold">
                                      Collectez de l'argent sans souci
                                    </div>
                                    <div class="text-sm mt-6 px-0 font-bold">
                                      Créez des factures astucieuses
                                    </div>
                                    
                               </div>
                               <div class=" flex  gap-0.5">
                                    <div class="text-sm mt-5 px-15 ">
                                      Récupérez facilement <br> votre argent depuis <br> Amazon, Stripe et plus <br> encore, le tout dans 9  <br>devises.
                                    </div>
                                    <div class="text-sm mt-6 px-2">
                                      Ajoutez vos numéros de <br> compte locaux aux <br> modèles de factures pour <br> recevoir vos paiements à <br> temps et gratuitement, tel  <br> un local.
                                    </div>
                                    
                               </div>
                         
                    </div>

                               <div class="text-2xl py-55 px-40">
                                <img src="https://wise.com/web-art/assets/illustrations/receive-medium@1x.webp" alt="">
                               </div>



                               
                   </div>


                       
                 
            </div>
              
                              <div class="px- text-center  py-10 "> 
                                 
                                  
                           <div class="font-semibold text-4xl ">
                                Une collaboration  <br>plus ingénieuse <br> avec vos employés
                               </div>

                               <p class="text-xl mt-5">Fini les va-et-vient pour payer des factures, gérer les dépenses et les flux de  <br> trésorerie. Donnez un accès Wise à votre comptable et votre équipe, et contrôlez <br> leurs autorisations.</p>
                              

                                
     


                               <div class="text-center mt-10 px-10">
  <figure class="relative inline-block">
    <img 
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      class="rounded-xl shadow-lg"
    />
    
    <!-- Card superposée avec débordement -->
    <div class="absolute bottom-5 left-[-60px] bg-white bg-opacity-90 p-4 h-30 rounded-4xl w-[50%] shadow-md">
      <h2 class="text-lg font-bold">Titre du Produit</h2>
      <p class="text-sm text-gray-600">Description ici...</p>
    </div>
  </figure>
</div>


    
                              </div>


      <div class="flex ">
           <div class="px-50 font-bold text-xl">Un rapprochement plus rapide</div>


           <div class="px-5 font-bold text-xl">Faites des paiements de masse</div>

      </div>



      <div class="flex gap-1 ">
           <div class="px-50  text-xl">Connectez vos comptes à Xero ou  <br>  QuickBooks en temps réel pour gagner <br> du temps sur la gestion manuelle.</div>


           <div class="px-0 text-xl">Payez jusqu'à 1 000 personnes en un <br>  seul clic. Il vous suffit de télécharger un <br> fichier avec les détails de chaque <br> transfert et d'effectuer un seul <br> paiement.</div>

      </div>

    

            <div class=" text-center py-20">
              <button class="bg-green-500 text-black px-2 py-1  p-4  h-12 w-70   text-s=lg rounded-full ..."   >Ouvrez un compte aujourd'hui</button>
            </div>
          


      <div>

      </div>


          <div class="bg-gray-200 h-screen w-full ">
                <div class="flex gap-x-1    text-center justify-center">
                    <div class="mt-10 p-5  w-[550px] h-[380px]  ">
                  <img  class="w-full h-full object-cover" src="https://wise.com/imaginary-v2/images/9632e3c58ae5a1b6ac995703f985eae8-business_desktop_mobile_card.png" alt="">
                    </div>
                    
                    <div class=" flex flex-col mt-10">
                            
                               <p class="font-bold text-4xl  "> Tout avoir  au <br>  même endroit</p>

                               <div class="text-lg px-0 ml-16 mt-5 max-w-lg leading-relaxed ">
                                    Déplacez de l'argent entre les devises en quelques 
                                  <br> secondes, toujours au taux de change réel et sans les 
                                  <br> frais de conversion élevés. Accédez à jusqu'à 54
                                   <br> devises à partir d'un compte facile à utiliser.
                                </div>
                                 
                                <div class="px-10 mt-5 ml-16 "><button class="bg-green-500 text-black px-2 py-1  p-4  h-12 w-70   text-s=lg rounded-full ..."   >Ouvrez un compte aujourd'hui</button></div>
                               
                                <div class="flex mt-5 gap-x-25 ml-20">
                                        
                                          <div class="font-bold  text-sm">
                                          Connectez vos applis
                                        </div>
                                           
                                         <div class="px-0 font-bold  text-sms">Contrôlez les flux de trésorerie</div>

                                        
                                         </div>

                                         <div class="flex ml-14 gap-x-10">
                                        
                                          <div class=" text-sm">
                                            Intégrez des plateformes  <br> comme Xero pour voir <br> tout votre argent au même endroit.
                                        </div>

                                             
                                         <div class=" text-sms">Gardez votre argent <br> international en un seul <br>  endroit pour une visibilité <br> totale.</div>
                                   </div>
                                         
                              

                        </div>
                </div>
          </div>

        
                    <div>


                      
                          
                           <div class="relative bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 text-center py-20 px-6">
    <h1 class="text-4xl md:text-5xl font-bold text-green-90">
      WISE POUR LES GRANDES ENTREPRISES
    </h1>
    <p class="text-lg text-green-900 mt-4 max-w-2xl mx-auto">
      Nos experts peuvent aider votre équipe à se développer à l'échelle mondiale.
      Contactez-nous pour savoir comment Wise Business peut vous aider.
    </p>
    <button class="mt-6 bg-green-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition">
      Discutez avec notre équipe de vente
    </button>
  </div>


                       </div>
                  

              <div class="text-center mt-10 ">
                    <div class="font-bold text-6xl">Fonctionnalités du produit</div>


                 
              </div>


              <div class="flex items-center px-10 mt-5 text-center gap-x-1">
    <div class="text-sm">
      Votre entreprise est enregistrée dans le pays suivant :
    </div>
    <div class="relative inline-block text-left">
      <button
        
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
      >
       
        <svg class="w-2.5 h-2.5 ml-3" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <!-- Menu déroulant affiché au clic -->
      <div v-show="open" class="absolute z-10 mt-2 bg-white rounded-lg shadow-sm w-60 dark:bg-gray-700">
        <div class="p-3">
          <input
            type="text"
            placeholder="Rechercher un pays"
            v-model="search"
            class="block w-full p-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-600"
          />
        </div>
        <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm">
          <li
            
            class="py-2 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
          >
           
          </li>
        </ul>
      </div>
    </div>
  </div>


     <div class="flex bg-white gap-x-10 justify-center text-center  mt-10 ">
             
<div class="card w-80 h-55  rounded-3xl  bg-white bg-base-100 card-xl shadow-2xl">
  <div class="flex-col card-body mt-10 ml-35 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

    <div class="-ml-35 mt-5 card-actions">
         <div class="font-bold text-xl">Compte Wise Business</div>
         <div class="text-sm mt-5">
          Ouvrez un compte gratuitement et  <br>  effectuez des paiements avec le taux <br> de change réel dans plus de 70 pays
         </div>
    </div>
  </div>
</div>

             
<div class="card w-80 h-55  rounded-3xl  bg-white bg-base-100 card-xl shadow-2xl">
  <div class="flex-col card-body mt-10 ml-35 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

    <div class="-ml-35 mt-4 card-actions">
         <div class="font-bold text-xl">Alternative bancaire
        </div>
         <div class="text-sm mt-4">
          Obtenez tout ce dont vous avez <br> besoin pour vos besoins bancaires à <br> l'étranger, y compris un sort code, un <br> IBAN, un numéro de routage et plus encore.
         </div>
    </div>
  </div>
</div>
          
<div class="card w-80 h-55  rounded-3xl  bg-white bg-base-100 card-xl shadow-2xl">
  <div class="flex-col card-body mt-10 ml-35 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

    <div class="-ml-35 mt-5 card-actions">
         <div class="font-bold text-xl">Carte de débit
        </div>
         <div class="text-sm mt-5">
          Dépensez en ligne ou en magasin avec <br> plusieurs devises sans les frais de <br> transaction pour l'étranger.
         </div>
    </div>
  </div>
</div>


     </div>
    
        <div class="text-center justify-center mt-10 bg-white h-50 w-full ">

          <button class="bg-green-500 text-black px-2 py-1  h-12 w-70  p-4   text-s=lg rounded-full ...">Commencez</button>
        </div>


        <div class="bg-green-700 h-150 w-full">

               <div class="flex-col justify-center text-center">
                         <div class="py-30">   
                       <div class="text-6xl font-bold   ">Foire aux questions <br> concernant Wise Business</div>
                              </div>

                       
                              <div class="flex justify-center text-center">
                            <div class="-mt-20">
                                  <div class="text-xl"> Quelle est la difference entre un compte Wise personnel et un compte Wise <br> Business ?</div> 
                                  <div v-if="isOpen" class=" text-white ">
    <p class="text-sm">
      Avec un compte personnel, vous pouvez gérer vos finances personnelles <br> internationales.
      Wise Business vous permet d'aller plus loin pour votre entreprise et de <br> trouver des
      opportunités de  <br> croissance. Vous pouvez vous connecter à votre logiciel de comptabilité,
      gérer les dépenses des employés et donner un accès à vos employés ou à <br> votre comptable,
      et plus encore. Certaines devises ont des restrictions commerciales à <br> propos desquelles
      vous pouvez vous renseigner ici.
    </p>
  </div> 
                           </div>
                           
                             <div class="relative inline-block text-left ml-7 -mt-20">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"    @click="toggleText" class="size-6 cursor-pointer transition-transform " :class="{ 'rotate-180': isOpen }">
                                
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>                               
                               </div>
                               

                                
                          
                                  
                           </div>

                           <div class="flex justify-center text-center">
                            <div class="-mt-1">
                                  <div class="text-xl">Commment pouvez-vous vous qualifier pour un compte Wise  Business ?</div>  
                                  <div  class=" text-white ">
    
                           </div>
                           
                           </div>

                             <div class="relative inline-block text-left ml-15 mt-0">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" @click="toggleText" stroke="currentColor" class="size-6  cursor-pointer transition-transform " :class="{ 'rotate-180': isOpen }" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"  />
</svg>
                               </div>
                                  
                                  
                           </div>



                           <div class="flex justify-center text-center">
                            <div class="mt-10">
                                  <div class="text-xl">Combien de temps prend pour la verification </div>  
                           </div>

                             <div class="relative inline-block text-left ml-75 mt-10">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
                               </div>
                          
                                  
                           </div>



                           <div class="flex justify-center text-center">
                            <div class="mt-10">
                                  <div class="text-xl"> puise-je Ouvrier un compte Wise Business sans argent</div>  
                           </div>

                             <div class="relative inline-block text-left ml-55 mt-10">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
                               </div>
                          
                                  
                           </div>


                           <div class="flex justify-center text-center">
                            <div class="mt-10">
                                  <div class="text-xl">Es-ce que  Wise Business est Securité ?</div>  
                           </div>

                             <div class="relative inline-block text-left ml-90 mt-10">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
                               </div>
                          
                                  
                           </div>


                             



                           

                                


               </div>
    
        </div>




        <FooterComponent/>
   

    
              

          


   
    

</template>


<script>

export default {
  name:'FooterComponent',
  data() {
    return {
      isOpen: false,
      amount: 1000,
      fees: 5.76,
      exchangeRate: 0.8250,
    };
  },
  methods: {
    toggleText() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    convertedAmount() {
      return (this.amount - this.fees).toFixed(2);
    },
    recipientAmount() {
      return (this.convertedAmount * this.exchangeRate).toFixed(2);
    }
  }
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>

