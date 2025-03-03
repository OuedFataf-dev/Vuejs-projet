<template>

     

    <div class="bg-gray-100  mt-0 mb-30  h-400 ">
         
      <div class="flex flex-row space-x-8 justify-center ">
<!-- Première carte -->
<div class="bg-white rounded-6xl shadow-lg p-8 text-center text-black flex flex-col items-center h-20 w-90 ">

 
</div>

<!-- Deuxième carte -->
<div class="bg-white rounded-6xl  shadow-lg p-8 text-center text-black flex flex-col h-20 items-center w-90">
 
</div>
  
</div>
    
      
          
         <div class=" px-65 py-0 mt-0 ">

        <div class="bg-white rounded-lg shadow-lg p-8 text-center text-black flex flex-col items-center px-60 w-200 h-200 mt-50">
             
          <div class="w-full flex items-center justify-center space-x-4 mb-4">
            <!-- Premier input -->
            <div class="flex items-start rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">€</div>
              <input type="text" name="price1" id="price1" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="0.00" />
              <div class="grid shrink-0 grid-cols-1">
                <select id="currency1" name="currency1" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500">
                  <option>EUR</option>
                  <option>USD</option>
                  <option>CAD</option>
                </select>
              </div>
            </div>
  
            <!-- Image séparatrice -->
            <img src="https://flagcdn.com/w40/gb.png" class="w-6 h-6" />
  
            <!-- Deuxième input -->
            <div class="flex items-start rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">£</div>
              <input type="text" name="price2" id="price2" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="0.00" />
              <div class="grid shrink-0 grid-cols-1">
                <select id="currency2" name="currency2" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500">
                  <option>GBP</option>
                  <option>USD</option>
                  <option>CAD</option>
                </select>
              </div>
            </div>
          </div>
  
          <!-- Informations sur les taux de change et les frais -->
          <div class="flex">
            <div class="w-full  bottom-5 left-[-60px]   mt-4">
            <div class="text-sm text-gray-600">Taux de change moyen du marché: 1 EUR = 0.828345 GBP</div>
            <div class="text-sm text-gray-600">Il y a environ 2 heures</div>
          </div>

               <div class="text-">
                
               </div>
          
          </div>
        <div class="">

        </div>
          <!-- Section des prestataires -->


          <div class="bg-white  flex justify-center p-4 w-200 ">
    <div class="w-400 max-w-30xl bg-white rounded-lg shadow-lg ">
      <!-- En-tête du tableau -->
      <div class="bg-green-900 text-white p-4 rounded-t-lg grid grid-cols-4 text-left font-semibold w-200 h-40">
        <div>Prestataire</div>
        <div>Taux de change (1 EUR → GBP)</div>
        <div>Frais de transfert</div>
        <div class="text-right">
          <span class="bg-blue-600 px-2 py-1 rounded-md">Le bénéficiaire reçoit</span>
          <br />
          <span class="text-blue-400">Envoi de 1000 EUR</span>
        </div>
      </div>

      <!-- Liste des prestataires -->
      <div v-for="(provider, index) in providers" :key="index" class="grid grid-cols-4 p-4 border-b text-sm items-center">
        <!-- Logo et nom -->
        <div class="flex items-center space-x-2">
          <img :src="provider.logo" alt="Logo" class="w-6 h-6" />
          <span class="font-semibold">{{ provider.name }}</span>
        </div>

        <!-- Taux de change -->
        <div>
          <span class="font-semibold">{{ provider.rate }}</span>
          <span :class="provider.trend === 'up' ? 'text-green-500' : 'text-red-500'">●</span>
          <div class="text-gray-500 text-xs">Taux moyen du marché</div>
        </div>

        <!-- Frais de transfert -->
        <div>{{ provider.fees }} EUR</div>

        <!-- Montant reçu -->
        <div class="text-right font-semibold">
          {{ provider.received }} GBP
          <div v-if="provider.difference" :class="provider.difference < 0 ? 'text-red-500' : 'text-green-500'">
            {{ provider.difference > 0 ? '+' : '' }}{{ provider.difference }} GBP
          </div>
          <button v-if="provider.button" class="bg-green-500 text-white px-2 py-1 rounded mt-1 text-xs">
            Envoyez de l'argent
          </button>
        </div>
      </div>
    </div>
  </div>
 <p class="text-sm">
        Les informations ci-dessus s'appliquent lorsque vous payez par virement bancaire. <a class="s" href=""> Comment collectons-nous ces informations ?</a>  </p>
         </div> 
       
      </div>
       
    
    </div>
    
      <div>
       
       
        <div class=" flex justify-center items-center text-center p-20 px-10 card card-compact bg-base-100 w-300 mt-30 max-w-50xl ">
  <figure>
    <img 
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
    
  
</div>
     
      </div>
      <div>
         <div class=" text-bold font-bold text-3xl px-60 ">
            Comparez les meilleurs taux de change
         </div>
           <div class="px-60 mt-5">
            Nous construisons la meilleure façon de déplacer et de gérer de l'argent à <br> travers le monde. Frais mini. Facilité max. Pleine vitesse.

           </div>
              <div class=" px-60 ">
                <button class=" bg-green-500 text-black px-10 py-1 text-s=lg rounded-full ... mt-10 h-12 ">En savoir plus sur notre mission</button>
              </div>
      </div>


  </template>


<script>
export default {
  data() {
    return {
      providers: [
        {
          name: "WISE",
          logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/TransferWise_logo.png",
          rate: "0.828345",
          trend: "up",
          fees: "5.76",
          received: "823.57",
          difference: null,
          button: true,
        },
        {
          name: "Instarem",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Instarem_Logo.svg/512px-Instarem_Logo.svg.png",
          rate: "0.821778",
          trend: "down",
          fees: "0.00",
          received: "821.78",
          difference: "-1.79",
        },
        {
          name: "OFX",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/OFX_logo.png",
          rate: "0.819286",
          trend: "down",
          fees: "0.00",
          received: "819.29",
          difference: "-4.28",
        },
        {
          name: "Remitly",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Remitly_logo.svg/512px-Remitly_logo.svg.png",
          rate: "0.818296",
          trend: "down",
          fees: "1.99",
          received: "816.67",
          difference: "-6.90",
        },
        {
          name: "UniCredit Bank",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/UniCredit.svg",
          rate: "0.828365",
          trend: "up",
          fees: "18.15",
          received: "813.33",
          difference: "-10.24",
        },
        {
          name: "Instarem",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Instarem_Logo.svg/512px-Instarem_Logo.svg.png",
          rate: "0.821778",
          trend: "down",
          fees: "0.00",
          received: "821.78",
          difference: "-1.79",
        },
        {
          name: "OFX",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/OFX_logo.png",
          rate: "0.819286",
          trend: "down",
          fees: "0.00",
          received: "819.29",
          difference: "-4.28",
        },
        {
          name: "WISE",
          logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/TransferWise_logo.png",
          rate: "0.828345",
          trend: "up",
          fees: "5.76",
          received: "823.57",
          difference: null,
          button: true,
        },
        {
          name: "Instarem",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Instarem_Logo.svg/512px-Instarem_Logo.svg.png",
          rate: "0.821778",
          trend: "down",
          fees: "0.00",
          received: "821.78",
          difference: "-1.79",
        },
        {
          name: "OFX",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/OFX_logo.png",
          rate: "0.819286",
          trend: "down",
          fees: "0.00",
          received: "819.29",
          difference: "-4.28",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>