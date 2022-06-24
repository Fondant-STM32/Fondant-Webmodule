<template>
  <div>
    <h1>Over deze website</h1>


     <hr class="spacer">
     <h2 id="Algemeen">Algemeen</h2>
     <p>
        Deze website is gemaakt in combinatie met de <a href="https://github.com/Fondant-STM32/Fondant">fondant library</a> en dient
        als leermiddel voor beginnende programmeurs om aan de slag te gaan met het STM32 platform, en embedded in het algemeen.
        Alle broncode van deze website, en de fondant library zelf is uitgegeven onder de boost licentie, te vinden op
        <a href="https://www.boost.org/LICENSE_1_0.txt">https://www.boost.org/LICENSE_1_0.txt</a>.
     </p>

     <p>
        De broncode van deze website is te vinden op <a href="https://github.com/Fondant-STM32/Fondant-Webmodule">https://github.com/Fondant-STM32/Fondant-Webmodule</a>.
     </p>

     <hr class="spacer">
     <h2 id="Technologieen">Technologieën</h2>
     <p>
        Deze website is gebouwd met de volgende technologieën/libraries.
     </p>
     <ul>
        <li><a href="https://vuejs.org/">VueJS</a></li>
        <li><a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap</a></li>
        <li><a href="https://wavedrom.com/">WaveDrom</a></li>
        <li><a href="https://github.com/Daizhen1995/vue3-highlightjs">Vue3Highlightjs</a></li>
     </ul>

     <hr class="spacer">
     <h2>Achtergrond</h2>
     <p>
         Mijn naam is Niels Post. Deze website, en de bijbehorende library heb ik gemaakt voor het 3e jaars Personal Innovation
        project voor mijn studie HBO-ICT (technische informatica) aan de Hogeschool Utrecht. Mijn doel hierbij was om een
        overzichtelijk leermiddel voor embedded software development te maken voor beginners. Dit is iets wat er voor zover ik bekend was
        bij het starten van het project nog niet was. Tijdens dit project heb ik veel bijgeleerd
        over de onderdelen van STM32 processoren, webframeworks en het schrijven van informatieve teksten.
     </p>

     <p>Mocht ik nog ergens
        verder mee kunnen helpen, of zijn er andere vragen, <a href="mailto:niels.maff.pc@gmail.com">mail me gerust!</a></p>



  </div>
</template>

<script>
import titleMixin from "@/components/Helpers/titleMixin";

export default {
  name: "OverDezeWebsite",
  components: {
  },
   title: "Over deze website",
   mixins: [titleMixin]
}
</script>

<style scoped>
</style>