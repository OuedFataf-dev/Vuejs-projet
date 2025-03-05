
<script setup>


import FooterComponent from './FooterComponent.vue'
import Navbar from './Navbar.vue';



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

 <div class="bg-custom-green  w-full h-280">


       <div class="flex text-center justify-center  text-10xl flex-col py-50">
          <div class="font-semibold text-6xl">Ne payez que pour <br> ce que vous utilisez
          </div>
        <div class=" text-sm mt-10 ">
            Pour les personnes résidant ici : France
          </div>

          <div class="text-xl mt-10">
                 <a href="" class="underline  font-semibold"> Basculer au compte Wise Business</a>
          </div>

   <div class="flex space-x-4 mt-10 px-15">
         
             
    <div class="max-w-130 h-60 p-6 bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="flex text-center">
            <div class="mt-20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-16">
  <path stroke-linecap="round" stroke-linejoin="round" class="w-100 h-50" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
</svg>

            </div>
            <div class="px-20 py-10">
                 <div class="text-2xl font-bold">ENVOYEZ DE L'ARGENT </div>

                    <div class="mt-2"> <p class="text-sm"> transferts l'argent entre différente <br> banque ,ou depuis votre compte

</p></div>
              </div>
                
          </div>
         
       
     
      


</div>
<div class="max-w-130 h-60 p-6 bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="flex text-center">
            <div class="mt-20">
              <svg aria-hidden="true" focusable="false" role="none" class="w-20 h-20"   width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M21.424 4.714c.476 0 .862.386.862.862v6.423c0 .237-.2.424-.415.526a1.3 1.3 0 0 0-.416.322 1.8 1.8 0 0 0-.33.568 2.1 2.1 0 0 0-.125.728c0 .255.044.502.126.728.081.225.196.416.328.567s.276.256.417.323c.203.096.393.268.413.486h.002v2.606a.86.86 0 0 1-.862.861H2.576a.86.86 0 0 1-.862-.861V5.576c0-.476.386-.862.862-.862zm-.853 12.242V18H3.428V6.429h17.143v4.9a3 3 0 0 0-.407.39c-.278.318-.5.696-.65 1.112s-.228.862-.228 1.312.077.896.228 1.312c.15.416.372.794.65 1.112q.19.216.407.39m-15-5.813h2.572V9.429H5.57z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="px-20 py-10">
                 <div class="text-2xl font-bold">UTILISER LA CARTE  <br> DE DEBIT WISE </div>

                    <div class="mt-2"> <p class="text-sm"> Obtenez une carte nouvelle carte ,depenser à <br> l'etranger ,et retirer les espèces depensez aux  <br>
                     guichets automatiques
</p></div>
              </div>
                
          </div>
         
       
     
      


</div>


    

   </div>
  <div class="flex space-x-4 mt-10 px-15">
             
    <div class="max-w-130 h-60 p-6 bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="flex text-center">
            <div class="mt-20">
              <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" class="w-20 h-20" />
</svg>

            </div>
            <div class="px-20 py-10">
                 <div class="text-2xl font-bold">ENVOYEZ DE L'ARGENT </div>

                    <div class="mt-2"> <p class="text-sm"> transferts l'argent entre différente <br> banque ,ou depuis votre compte

</p></div>
              </div>
                
          </div>
         
       
     
      


</div>
<div class="max-w-130 h-60 p-6 bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="flex text-center">
            <div class="mt-20">
              <svg aria-hidden="true" class="w-20 h-20"  focusable="false" role="none" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.662 3.429a6.23 6.23 0 0 1 5.323 2.987 7.948 7.948 0 0 0-8.57 8.57A6.234 6.234 0 0 1 9.663 3.429M6.887 17.113A7.948 7.948 0 1 1 17.112 6.888 7.948 7.948 0 1 1 6.888 17.113m13.685-2.775a6.234 6.234 0 1 1-12.468 0 6.234 6.234 0 0 1 12.468 0" clip-rule="evenodd"></path></svg>
            </div>
            <div class="px-20 py-10">
                 <div class="text-2xl font-bold">ENVOYEZ DE L'ARGENT </div>

                    <div class="mt-2"> <p class="text-sm"> transferts l'argent entre différente <br> banque ,ou depuis votre compte

</p></div>
              </div>
                
          </div>
         
       
     
      


</div>


  </div>

       </div>

          
 </div>

    <div class="bg-gray-100  mb-10 w-full h-300 ">


        <div class="flex flex-col text-center justify-center py-15">
  <div class="font-bold text-4xl">Des prix justes, sans frais cachés</div>

  <p class="text-sm mt-5">
    Pas d'abonnement, pas de frais mensuels. Les frais sont toujours indiqués clairement, et vous ne payez que pour ce que vous utilisez.
  </p>
      
  <div class="gap-1">
  <!-- Container flex pour les cartes 1 et 2 -->
  <div class="flex justify-center items-center gap-0.5 mt-10">
    <!-- Première carte -->
    <div class="card bg-white w-100 rounded-tl-3xl h-50 shadow-md">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <!-- Deuxième carte -->
    <div class="card bg-green-500 rounded-tr-3xl w-40 h-50 shadow-md">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  </div>

  <!-- Container flex pour les cartes 3 et 4 avec une marge négative -->
  <div class="flex justify-center items-center gap-0.5 -mt-0">
    <!-- Troisième carte -->
    <div class="card bg-white w-100 h-48 shadow-md">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <!-- Quatrième carte -->
    <div class="card bg-green-500 w-40 h-49 shadow-md">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  </div>
</div>




          </div>
          </div>

           <div class="bg-gray-white  mb-10 w-full h-200 ">

            <div class="text-center text-3xl font-black">Nos trois principes</div>

<div class="flex justify-center items-center mt-10  gap-x-5 space-x-20">
  <!-- Premier principe -->
  <div class="w-60 text-center">
    <div class="w-60 h-60 bg-green-200 rounded-full flex items-center justify-center transform translate-x-4">
      <img src="https://wise.com/web-art/assets/illustrations/coin-pile-down-small@1x.webp" alt="Moins cher" class="w-20 h-20">
    </div>
    <h2 class="font-bold text-lg mt-4 whitespace-nowrap">De moins en moins cher</h2>
    <p class="text-sm mt-2">
      Nous facturons aussi peu que possible et poursuivons notre mission de faire baisser les prix
      jusqu'à atteindre un jour la gratuité.
    </p>
  </div>

  <!-- Deuxième principe -->
  <div class="w-60 text-center">
    <div class="w-60 h-60 bg-orange-200 rounded-full flex items-center justify-center transform translate-x-4">
      <img src="https://wise.com/web-art/assets/illustrations/magnifying-glass-small@1x.webp" alt="Transparent" class="w-20 h-20">
    </div>
    <h2 class="font-bold text-lg mt-4 whitespace-nowrap">Radicalement transparents</h2>
    <p class="text-sm mt-2">
      Nous sommes honnêtes et transparents sur les coûts facturés, nous utilisons toujours le taux moyen
      du marché, et ne cachons jamais nos frais.
    </p>
  </div>

  <!-- Troisième principe -->
  <div class="w-60 text-center">
    <div class="w-60 h-60 bg-pink-200 rounded-full flex items-center justify-center transform translate-x-8">
      <img src="https://wise.com/web-art/assets/illustrations/heart-2-small@1x.webp" alt="Équitable" class="w-20 h-20">
    </div>
    <h2 class="font-bold text-lg mt-4 whitespace-nowrap">Équitable pour tout le monde</h2>
    <p class="text-sm mt-2">
      Vous payez pour ce que vous utilisez. Ni plus, ni moins. Nous sommes convaincus que personne ne
      devrait payer pour que d'autres obtiennent des choses gratuites.
    </p>
  </div>
</div>
                                 

                        
    




               

          </div>



          


            



          <FooterComponent/>
  

         

</template>



<script>

  export default {
  name:'FooterComponent',
  }

</script>

<style>
</style>