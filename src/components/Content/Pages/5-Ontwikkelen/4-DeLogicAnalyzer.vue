<template>
<div>
   <h1>De Logic Analyzer</h1>

   <p>
      Tijdens het werken met digitale signalen kan het heel handig te zijn om een beeld te krijgen van het signaal, en hoe
      deze is opgebouwd. Een makkelijke manier om dit te krijgen is door gebruik te maken van een Logic Analyzer. Dit is een
      apparaatje wat met een hoge frequentie een aantal pins kan meten om te zien of deze op een hoog of op een laag niveau zijn.
   </p>

   <p>
      In dit hoofdstuk leer je hoe je een logic analyzer kan uitlezen met het programma PulseView. Hiermee kan je, naast
      het zien van het signaal ook voor veel protocollen zien welke data er verstuurd word.
   </p>

   <div class="alert alert-secondary">Installatie-instructies voor PulseView: <router-link to="https://fondantlib.nl/Voorbereiding/VereistenInstalleren#PulseView">PulseView installeren</router-link></div>

   <hr class="spacer">
   <h2 id="WelkeAnalyzer">Welke Analyzer</h2>
   <img class="float-end"
        src="https://www.tinytronics.nl/shop/image/cache/data/product-319/24m%208ch%20logic%20analyzer-1500x1500.jpg"
        alt="Logic Analyzer" width="200">
   <p>
      PulseView heeft ondersteuning voor een groot aantal logic analyzers. Degene die we hier gebruiken is een veelgebruikte
      clone van een analyzer van het merk saeleae. Als je zoekt op "Logic Analyzer" zal je deze meestal kunnen vinden.
      Deze heeft 8 "kanalen" en kan een maximum frequentie aan van rond de 16mHz. Dit betekent dat alle kanalen ongeveer
      16.000.000 keer per seconden gelezen kunnen worden.
   </p>

   <p>
      Voor simpele IO zal de maximumsnelheid weinig uitmaken, maar wanneer je gebruik maakt van hardware-peripherals
      zoals SPI en I2C ligt de snelheid vaak erg hoog, en dan is een snelheid van 16mHz zeker geen overbodige luxe.
   </p>

   <hr class="spacer">
   <h2 id="SoftwareStarten">De software starten</h2>

   <ImageCarousel>
      <CarouselImage :src="require('@/assets/LogicAnalyzer/Analyzer-1.png')" alt="PinOut" title="">
         Plug de logic analyzer in en start PulseView. Als het goed is zie je de bovenstaande weergave. Hierbij staat
         als het
         goed is "Saleae Logic" aangegeven als verbonden apparaat.
      </CarouselImage>
      <CarouselImage :src="require(`@/assets/LogicAnalyzer/Analyzer-2.png`)" alt="PinOut done" title="">
         De snelheid staat standaard laag ingesteld. Zet deze op 16 mHz. Zet hierbij ook het aantal samples (linkerdropdown)
         op een hoge waarde (bijvoorbeeld 1G). Als je dit niet doet zal PulseView niet lang genoeg meten om nuttige data
         te krijgen.
      </CarouselImage>
   </ImageCarousel>


   <div class=" mt-3 alert alert-warning">Als het geselecteerde apparaat op "Demo Device" staat is de driver voor de logic analyzer
   mogelijk niet goed geïnstalleerd. Dit kan je doen via het programma "Zadig". Dit programma wordt meegeleverd met PulseView</div>


   <hr class="spacer">
   <h2 id="Aansluiten">Aansluiten</h2>

   <p>
      We gaan kijken naar één van de voorbeelden uit de voorbeelden-repository. Hiervoor flashen we de stm32 met het voorbeeld
      "6-SPI". In dit hoofdstuk bekijken we de data die in dit voorbeeld via de SPI-bus wordt verstuurd.
   </p>

   <p>
      Nadat de microcontroller geflasht is met het voorbeeld kan je deze aansluiten op de logic analyzer. Gebruik hiervoor
      de volgende verbindingen.
   </p>

   <div class="col-3">
      <table class="table table-sm table-dark">
         <thead>
         <tr>
            <td>Bluepill</td>
            <td>Logic Analyzer</td>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td>PA4 (CS)</td>
            <td>CH0</td>
         </tr>
         <tr>
            <td>PA5 (SCK)</td>
            <td>CH1</td>
         </tr>
         <tr>
            <td>PA6 (MISO)</td>
            <td>CH2</td>
         </tr>
         <tr>
            <td>PA7 (MOSI)</td>
            <td>CH3</td>
         </tr>
         <tr>
            <td>GND</td>
            <td>GND</td>
         </tr>
         </tbody>
      </table>

   </div>


   <hr class="spacer">
   <h2 id="AnalyserenDecoderen">Analyseren/decoderen</h2>

   <p>Als je nu op Run/Start drukt zal PulseView data gaan verzamelen. Als je deze even laat lopen zal je ongeveer
      het
      volgende zien.</p>

   <ExtImage class="mb-3" :src="require('@/assets/LogicAnalyzer/Analyzer-3.png')"></ExtImage>

   <p>
      Als je in zoomt zou je zelf kunnen nagaan welke data er precies verstuurd werd, maar dit kost erg veel tijd, zeker als
      je langere tijd bezig bent met het analyseren. Gelukkig kan je PulseView het signaal laten decoderen. Je zal dan een
      weergave krijgen met de data die verstuurd werd.
   </p>

   <p>
      Er zijn heel veel decoders voor specifieke chips beschikbaar, maar in dit geval kijken we alleen naar een "simpele"
      SPI-decoder. Specifiekere decoders kunnen vaak ook betekenis van data weergeven, zoals wat een bepaalde command bit
      betekent, maar deze decoder laat alleen de hexadecimale data zien.
   </p>

   <ImageCarousel>
      <CarouselImage :src="require('@/assets/LogicAnalyzer/Analyzer-4.png')" alt="PinOut" title="">
         Klik op het geel-groene golficoontje in de bovenbalk. je ziet nu een zijbalk met alle decoders. Zoek hier de
         SPI-decoder op.
      </CarouselImage>
      <CarouselImage :src="require(`@/assets/LogicAnalyzer/Analyzer-5.png`)" alt="PinOut done" title="">
         Je ziet nu een extra "datalijn" verschijnen linksonder in beeld. Deze zal nog niks weergeven omdat deze nog ingesteld
         moet worden. Klik erop om deze in te stellen.
      </CarouselImage>
      <CarouselImage :src="require(`@/assets/LogicAnalyzer/Analyzer-6.png`)" alt="PinOut done" title="">
         Stel nu de SPI-decoder in met de volgende instellingen. Zodra je dit hebt gedaan zal de decoder data gaan weergeven.
      </CarouselImage>

   </ImageCarousel>


   <hr class="spacer">
   <h2 id="HetResultaat">Het resultaat</h2>

   <p>
      Hieronder zie je het eindresultaat. Als je alles goed hebt ingesteld zal je onder de SPI-decoder steeds de
      data kunnen zien die verstuurd werd in hexadecimaal formaat.
   </p>

   <div class="alert alert-secondary">
      In dit voorbeeld zal MISO altijd 0xFF als resultaat geven omdat deze niet aangesloten is. Bij een apparaat/programma wat ook terugpraat
      zal je hier ook werkelijke data zien.
   </div>

   <ExtImage full-width :src="require(`@/assets/LogicAnalyzer/Analyzer-7.png`)"></ExtImage>


</div>
</template>

<script>

import CarouselImage from "@/components/Carousel/CarouselImage";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import ExtImage from "@/components/Helpers/ExtImage";
import titleMixin from "@/components/Helpers/titleMixin";

export default {
   name: "3-DeLogicAnalyzer",
   components: {
      CarouselImage,
      ImageCarousel,
      ExtImage
   },
   title: "De logic analyzer",
   mixins: [titleMixin]

}
</script>

<style scoped>

</style>