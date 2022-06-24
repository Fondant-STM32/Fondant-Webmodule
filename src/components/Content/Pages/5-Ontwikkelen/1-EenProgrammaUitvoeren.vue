<template>
<div>
   <h1 >Een programma uitvoeren</h1>

   <hr class="spacer">
   <h2 id="Nodig">Nodig</h2>
   <p>
      Als het goed is heb je nu een project klaar wat:
   </p>

   <ul>
      <li>In CLION en in STM32CubeIDE geladen kan worden</li>
      <li>De headers en cpp-files voor Fondant bevat</li>
      <li>De main.c omleidt naar een main.cpp met een fd_main()</li>
   </ul>

   <p>
      Heb je dit nog niet, kijk dan even naar het vorige hoofdstuk om dit in te stellen
   </p>

   <p>
      In dit deel nemen we door hoe je code op de microcontroller krijgt.
      Hiervoor heb je de volgende dingen nodig:
   </p>
   <ul>
      <li>Een STM32-Bluepill</li>
      <li>Een ST-Link programmer</li>
      <li>4 female-female jumper wires om de bluepill aan te sluiten op de st-link</li>
   </ul>

   <hr class="spacer">
   <h2 id="AansluitenEnFlashen">Aansluiten en flashen</h2>

   <ImageCarousel>
      <CarouselImage src="https://freeelectron.ro/wp-content/uploads/2019/12/connections.png" alt="PinOut" title="">
         Sluit de Bluepill op deze manier op de STLink aan.
      </CarouselImage>
      <CarouselImage :src="require(`@/assets/Fondantgebruiken/FondantGebruiken-1.png`)" alt="PinOut done" title="">
         Als je CLion Project goed is ingesteld zal je rechtsbovenin ongeveer deze balk zien. Druk nu op het groen play-icoon om
         de code te uploaden naar de STM32
      </CarouselImage>
      <CarouselImage :src="require(`@/assets/Fondantgebruiken/FondantGebruiken-2.png`)" alt="PinOut done" title="">
         De tekst die je nu onderin ziet is rood, maar dit hoeft niks ergs te zijn. Als de regel ** Programming Finished ** te zien
         is, is alles goed! De code is dan geupload naar de microcontroller.
      </CarouselImage>

   </ImageCarousel>


   <div class=" mt-3 alert alert-success">
      Als je dit hebt gedaan kan je code aanpassen om de microcontroller aan te sturen. Elke keer dat je de code op de
      bovenstaande manier uploadt, zal de veranderde code automatisch opnieuw compilen.
   </div>

   <div class="alert alert-danger">Als het uploaden nog niet lukt kan het zijn dat de draden op de ST-link verkeerd om zitten, controleer dit goed!
   Ook kan het zijn dat je de reset-knop van de bluepill moet indrukken vlak voor het flashen
   </div>

   <div class="alert alert-warning">
      Misschien heb je de play-knop ook gezien in de STM32CubeIDE. Deze zal hetzelfde doen, maar gebruikt een ander compiler-toolchain
      en mogelijk andere compiler-flags. Het resultaat van een programma kan hierbij dus anders zijn.
   </div>



</div>
</template>

<script>
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import CarouselImage from "@/components/Carousel/CarouselImage";
import titleMixin from "@/components/Helpers/titleMixin";

export default {
   name: "OntwikkelenMetFondant",
   components: {
      ImageCarousel,
      CarouselImage
   },
   title: "Een programma uitvoeren",
   mixins: [titleMixin]

}
</script>

<style scoped>

</style>