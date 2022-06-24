<template>
   <div>
      <h1>Debuggen</h1>

      <p>
         Als je langere tijd achter elkaar aan het programmeren bent willen er nog wel eens kleine foutjes je code in
         sluipen.
         Als hierna je code ineens niet meer doorloopt, maar vastloopt na een paar handelingen is dit natuurlijk erg
         vervelend.
         Het is alleen meestal nogal lastig om te vinden waar het nou precies fout gaat.
      </p>

      <p>
         Één snelle oplossing die je vaak ziet langskomen is het plaatsen van print-statements in je code om op te
         sporen waar het foute
         resultaat begint. Deze methode (hoe lomp deze ook is) is effectief in het opsporen van je fout, maar helaas is
         dit in
         embedded niet altijd mogelijk. Microcontrollers hebben vaak geen standaard console-out om debug informatie te
         printen.
         Hiervoor zal dus iets anders nodig.
      </p>

      <p>
         In veel programmeertalen is er ook een breakpoint debugger. Met dit stuk software kan je de uitvoering van je
         programma
         onderbreken op bepaalde code-regels, om te bekijken welke data er dan aanwezig is. Deze optie is vaak wel
         beschikbaar op
         embedded. Soms heb je hier extra hardware of een speciale debugger nodig. In het geval van STM32 kan dit ook
         met de ST-link waarmee
         we de code uploaden.
      </p>

      <p>
         In dit hoofdstuk nemen we de stappen door om gebruik te maken van breakpoint-debugging in CLion via de ST-link.
         We doen
         dit via het example 4-SPI in de examples repository.
      </p>

      <hr class="spacer">
      <h2 id="DebugsessieStarten">Debugsessie starten</h2>
      <ImageCarousel>
         <CarouselImage :src="require(`@/assets/Debuggen/Debuggen-1.png`)" alt="PinOut" title="">
            Om de debugsessie te starten hoef je alleen op het debugicoontje te klikken in CLion. Dit is het
            insect-icoontje naast
            de run-knop. Als je hierop drukt zal de code gecompilet, en geupload worden, waarna de chip in debugmodus
            wordt
            gezet.
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Debuggen/Debuggen-2.png`)" alt="PinOut done" title="">
            Je ziet nu het debug-toolwindow openen. Hierin kan je het debugproces besturen. Links zie je een
            icoontje van een R met een streep erboven. Deze start de microcontroller opnieuw op. Druk hierop om de
            uitvoering
            van je programma te starten.
         </CarouselImage>
      </ImageCarousel>

      <p class="mt-3">
         Je hebt een debugsessie gestart, maar ziet nog niet heel veel. Dit komt omdat de sessie pas data zal ophalen op
         het
         moment dat de software een breakpoint tegenkomt. Een breakpoint is een soort aanwijzer die je plaatst op een
         coderegel
         om aan te geven dat de debugger moet stoppen, en de staat van de code moet analyseren
      </p>

      <hr class="spacer">
      <h2 id="BreakpointsEnAnalyse">Breakpoints en analyse</h2>
      <ImageCarousel>
         <CarouselImage :src="require(`@/assets/Debuggen/Debuggen-3.png`)" alt="PinOut" title="">
            Plaats nu een breakpoint op de regel waar de code data verstuurt. Doe dit door op de aangegeven plek te
            klikken
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Debuggen/Debuggen-4.png`)" alt="PinOut done" title="">
            Als je code al uitgevoerd werd zal deze meteen onderbreken. Je ziet nu als het goed is een geselecteerde
            regel.
            Dit is de regel waar de debugger VOOR is gestopt.
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Debuggen/Debuggen-5.png`)" alt="PinOut done" title="">
            Je debug-toolwindow ziet er nu zo uit. Je kan zien dat alle variabelen die in de regel beschikbaar zouden
            zijn
            hier ook te zien zijn. Hier kan je dus makkelijk zien wat de status van je programma is!
         </CarouselImage>
         <CarouselImage :src="require(`@/assets/Debuggen/Debuggen-6.png`)" alt="PinOut done" title="">
            In de invoerbalk kan je bepaalde expressies controleren. In dit geval controleren we de waarde van data[1].
            Deze zie je vervolgens eronder verschijnen als "result"
         </CarouselImage>
      </ImageCarousel>


      <hr class="spacer">
      <h2 id="Stepping">Stepping</h2>

      <img :src="require('@/assets/Debuggen/Stepbalk-1.png')">
      <p>
         Als je op een breakpoint staat kan je de bovenstaande balk gebruiken om je programma stap voor stap door te
         laten lopen.
         Hierdoor hoef je niet een hele lading breakpoints te zetten, maar hoef je er alleen in het begin van je functie
         een te plaatsen.
      </p>

      <p>
         <img :src="require('@/assets/Debuggen/Stepbalk-2.png')">
         <span class="fw-bold">Step Over</span> voert de huidige instructie uit, en breakt op de volgende instructie. In
         het
         voorbeeld zou deze dus bus.transmit_wait uitvoeren, en vervolgens breaken op data[0]++.
      </p>

      <p>
         <img :src="require('@/assets/Debuggen/Stepbalk-3.png')">
         <span class="fw-bold">Step into</span> breakt op de eerste instructieregel van de aangewezen instructie. In dit
         voorbeeld
         zou deze dus de op de eerste regel van bus.transmit_wait komen. Step into zal niet proberen om functies van
         externe libraries
         in te stappen.
      </p>

      <p>
         <img :src="require('@/assets/Debuggen/Stepbalk-4.png')">
         <span class="fw-bold">Force Step into</span> doet hetzelfde als step into, maar probeert ook in functies van
         externe
         libraries te stappen.
      </p>

      <p>
         <img :src="require('@/assets/Debuggen/Stepbalk-5.png')">
         <span class="fw-bold">Step Out</span> Voert de huidige context/functie uit tot het einde, en breakt op het
         moment dat
         het programma hier uitkomt. In dit geval zou Step Out dus breaken op het einde van de while loop.
      </p>

      <p>
         <img :src="require('@/assets/Debuggen/Stepbalk-6.png')">
         <span class="fw-bold">Step Out</span> Voert de huidige context/functie uit tot het einde, en breakt op het
         moment
         dat
         het programma hier uitkomt. In dit geval zou Step Out dus breaken op het einde van de while loop.
      </p>

      <hr class="spacer">
      <h2 id="Notities">Notities</h2>
      <p>
         Breakpoint debugging is een hele nuttige tool om snel problemen in je software te lokaliseren en op te lossen.
         Door een juist geplaatst breakpoint kan je heel goed zien welke data er in je programma aanwezig zijn, en controleren
         of dit de verwachte data is. Er zijn in het geval van embedded wel een paar dingen waar je op moet letten tijdens
         het debuggen.
      </p>

      <h5>Optimalisatie</h5>
      <p>
         Je zal merken dat je niet op elke regel een breakpoint kan plaatsen. Dit is omdat regels code vaak weggeoptimaliseerd
         zullen worden door de compiler. Als dit echt in de weg zit kan je de volgende code gebruiken om een breakpoint.
         Doordat i als volatile is aangemerkt, en direct gebruikt, zal de compiler deze regel niet weghalen.
      </p>

      <CodeFragment type="cpp"><pre>
volatile int i = 0;
(void) i; // Zet het breakpoint op deze regel
</pre></CodeFragment>

      <h5>Onderbreking</h5>
      <p>
         Het is belangrijk om te onthouden dat een breakpoint ook de uitvoering van je code onderbreekt! Hierdoor kan het zijn dat timing-sensitieve
         onderdelen niet goed meer werken als je een breakpoint op de verkeerde plek zet tijdens het debuggen.
      </p>
   </div>
</template>

<script>
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import CarouselImage from "@/components/Carousel/CarouselImage";
import CodeFragment from "@/components/Helpers/CodeFragment";
import titleMixin from "@/components/Helpers/titleMixin";

export default {
   name: "2-DeDebugger",
   components: {
      ImageCarousel,
      CarouselImage,
      CodeFragment
   },
   title: "De debugger",
   mixins: [titleMixin]
}
</script>

<style scoped>

</style>