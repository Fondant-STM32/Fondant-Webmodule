<template>
<div>
   <h1>Ontwikkelen met Fondant</h1>

   <p>
      Bij het gebruiken van een library is het handig om te weten hoe de onderdelen van de library met elkaar verbinden.
      In dit hoofdstuk nemen we de hoofdlijnen van de structuur van Fondant door. Hier staan ook een aantal tips om
      Fondant zo effectief mogelijk te gebruiken.
   </p>


   <hr class="spacer">
   <h2 id="Algemeen">Algemeen</h2>
   <p>
      De meeste documentatie over het gebruik van bepaalde functies/klassen/enums van Fondant staat in de header-bestanden
      van de betreffende onderdelen. In sommige gevallen staan hier ook veelvoorkomende valkuilen bij het gebruik van
      het onderdeel. Kijk bij het gebruiken van Fondant dus altijd goed naar de documentatie van de functies die je gebruikt.
      Dit scheelt je mogelijk veel tijd bij het debuggen.
   </p>

   <hr class="spacer">
   <h2 id="Onderdelen">Onderdelen</h2>
   <p>
      Fondant is verdeeld in 4 onderdelen (die elk hun eigen map hebben in de library); modules, peripherals, targets en
      util.
      Voor elk van deze onderdelen nemen we kort door wat het doel ervan is.
   </p>

   <h3>Modules</h3>
   <p>
      Fondant modules zijn software-onderdelen die bedoeld zijn om bepaalde processor-onderdelen aan te sturen. Wanneer je
      een module include in je code, worden automatisch alle basisonderdelen hiervan geladen, en de processorspecifieke implementatie.
   </p>

   <p>
      Include een module met <span class="emph">#include &lt;fd/modules/[[MODULE]].hpp&gt;</span>
   </p>

   <p>
      Een speciale module is de core-module. Deze bevat de implementaties voor bepaalde functies die algemeen zijn, en die
      je vaak zal gebruiken, zoals fd::sleep  om je programma te laten wachten, en fd::software_reset om het programma
      opnieuw op te starten. Deze include je als je <span class="emph">&lt;fd/fondant.hpp&gt;</span> include.
   </p>

   <p>
      Op het moment zijn de volgende modules geïmplementeerd voor de STM32F1 serie processoren.
   </p>

   <ul>
      <li>GPIO</li>
      <li>SPI</li>
      <li>UART</li>
      <li>I2C</li>
      <li>Interrupts</li>
   </ul>

   <h3>Peripherals</h3>
   <p>
      Peripherals zijn externe sensoren/chips die door middel van 1 of meer fondant-modules aangestuurd kunnen worden.
      Bij Fondant zijn er een paar peripherals geïmplementeerd, maar de lezer word aangemoedigd om zelf ook mee te ontwikkelen!
   </p>

   <p>
      De volgende peripherals zijn op het moment geïmplementeerd.
   </p>

   <ul>
      <li>Een HD44780 character display (via een PCF8574 backpack)</li>
      <li>Een 4x4 matrix keypad (direct aangesloten op GPIO)</li>
      <li>Een BME 280 barometrische druksensor</li>
      <li>Een MPU6050 accelerometer/gyroscoop (via de I2C interface)</li>
   </ul>


   <h3>Targets</h3>
   <p>
      In targets staan de platformspecifieke implementaties van alle modules. Als er meer platformen toegevoegd worden
      zal de code hiervan hier ook komen te staan.
   </p>

   <div class="alert alert-danger">
      Tijdens normaal gebruik van Fondant hoef je nooit rechtstreeks een bestand uit Targets te includen. Deze zal
      automatisch geladen worden wanneer de desbetreffende module wordt ge-include.
   </div>

   <h3>Util</h3>
   <p>
      In Util staan een paar helper-functies en klassen die helpen met de functionaliteit van Fondant
   </p>

   <p>
      Een handige util is <span class="emph">fondant_targets.hpp</span>. Dit bestand maakt een aantal preprocessor-macro's
      aan, afhankelijk van het platform. Deze macro's kan je gebruiken om je code aan te passen als deze bijvoorbeeld in
      2 hardware-configuraties moet kunnen werken.
   </p>

   <hr class="spacer">
   <h2 id="Tips">Tips</h2>

   <h4>Base-implementaties</h4>
   <div class="alert alert-secondary">
      Elke module heeft binnen fondant een aantal base-definities. Deze zijn aanwezig in de fd:: namespace, en eindigen altijd op _base.
      Deze definities geven aan wat de interface van de module
      moet zijn. Gebruik bij het doorgeven van modules aan klassen/functies altijd een reference/pointer naar de base-definitie.
      Zo is de functie die je schrijft niet platformafhankelijk..

   </div>

</div>
</template>

<script>

import titleMixin from "@/components/Helpers/titleMixin";

export default {
   name: "OntwikkelenMetFondant",
   components: {
   }
   ,
   title: "Ontwikkelen met fondant",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>