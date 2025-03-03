<template>
  <div class="bg-green-400 h-164 w-full">
  
          <div class="flex-col justify-center items-center text-center py-40 ">

                 <div class="font-semibold text-8xl ">
                  Le compte Business  <br> international sans tracas


                 </div>

                 <div class="text-xl mt-5">
                      Inscrivez-vous au compte entreprise sans frais cachés,<br> taux élevés ou frais mensuels. Payez vos employés,<br> br
                       recevez des paiements et gérez des flux de trésorerie à <br>  l'étranger, le tout dans un seul endroit.
                     </div>

                    
                     
                        <div class="mt-10">
                          <button class="bg-green-500 text-black px-2 py-1  h-12 w-70  p-4   text-s=lg rounded-full ...">ouvrir un compte aujourd'hui</button>
                        </div>
          </div>                                                                          


  </div>




          <div class="bg-white h-150  w-full">      
             <div class="flex   px-35  p-20 mt-18  ">

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
            <div class=" px-35 p-15 py-20 text-right text-end justify-end items-end">
                

                 <div class="font-bold text-2xl  ">Payez des personnes en un clic et <br> économisez de l'argent</div>

                        <div class="mt-10">
                            <p class="text-sm">Effectuez des paiements internationaux et <br> économisez de l'argent avec Wise. Choisissez parmi plus de 70 pays et payez <br> vos employés ou vos fournisseurs à l'étranger, sans frais <br> cachés ni majorations de taux de change.

</p>
                        </div>


                            <div class="mt-10"><button class="bg-green-500 text-black px-2 py-1  p-4  h-12 w-70   text-s=lg rounded-full ..."   >Ouvrez un compte aujourd'hui</button></div>
                 
            </div>
             </div>

              
            </div>


            <div  class="bg-gray-200  w-full h-200">

                   <div class="flex">
                           
                               
                         

                         <div class="flex-col">
                          <div class=" text-2xl font-bold px-30 mt-25 py-15 ">
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
                                salut
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


          <div class="bg-gray-200 h-200 w-full ">
                <div class="flex ">
                    <div class="px-50 py-50">
                        salut
                    </div>

                        <div class="flex-col">
                             <div class="text-2xl py-30 px-65 ">
                               <p class="font-bold "> Tout avoir <br> au même endroit</p>

                              <div class="text-sm mt-5 ">
                                  Déplacez de l'argent entre les devises en quelques <br> secondes, toujours au taux de change réel et sans les <br> frais de conversion élevés. Accédez à jusqu'à 54 <br> devises à partir d'un compte facile à utiliser.
                                </div>
                             </div>

                                 <div class="px-60 mb-5"><button class="bg-green-500 text-black px-2 py-1  p-4  h-12 w-70   text-s=lg rounded-full ..."   >Ouvrez un compte aujourd'hui</button></div>
                                   <div class="flex ">
                                         <div class="px-50">
                                          <div class="font-bold  text-sm">
                                          Connectez vos applis
                                        </div>

                                         
                                         </div>


                                         <div class="px-0 font-bold  text-sms">Contrôlez les flux de trésorerie</div>
                                   </div>



                                   <div class="flex ">
                                         <div class="px-50">
                                          <div class=" text-sm">
                                            Intégrez des plateformes  <br> comme Xero pour voir <br> tout votre argent au même endroit.
                                        </div>

                                         
                                         </div>


                                         <div class=" text-sms">Gardez votre argent <br> international en un seul <br>  endroit pour une visibilité <br> totale.</div>
                                   </div>
                        </div>
                </div>
          </div>
    
            
    

</template>



<script>
export default {
  data() {
    return {
      amount: 1000,
      fees: 5.76,
      exchangeRate: 0.8250,
    };
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