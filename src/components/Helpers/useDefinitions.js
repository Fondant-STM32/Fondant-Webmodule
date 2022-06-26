import {ref} from "vue";

export default ()=> {
    return ref({
        "datasheet": "Informatiedocument met technische gegevens over een onderdeel of stuk software",
        "HAL": "Hardware Abstraction Layer; Een abstractielaag om programmeren met een microcontroller makkelijker te maken",
        "IDE": "Integrated Development Environment. Een softwarepakket waarmee software ontwikkeld kan worden. Hier zitten een aantal extra's in die de ontwikkelaar ondersteunen",
        "STM32": "Serie van 32-bits Microcontrollers van het merk ST",
        "MCU": "MicroController Unit; afkorting voor microcontroller",
        "MPU6050": "Veelgebruikte sensor met een accelerometer en een gyroscoop",
        "GPIO": "General Purpose Input Output, een signaalpin op een elektronisch circuit die zowel gebruikt kan worden als input, output, of beiden",
        "SPI": "Serial Peripheral Interface. Een seriële verbinding tussen 2 of meer elektronische circuits, waarbij één van de apparaten het initiatief heeft",
        "DMA": "Direct Memory Access, een elektronisch circuit in een processor wat kan lezen en schrijven in het geheugen zonder tussenkomst van software",
        "timer": "Een elektronisch circuit in een processor wat een groot aantal tijd-gerelateerde operaties kan uitvoeren",
        "flashen": "Het uploaden van gecompileerde code naar een microcontroller of embedded systeem",
        "logic level": "Een vooraf afgesproken spanningsniveau wat een bepaalde betekenis heeft voor een systeem. Bij microcontrollers is er meestal sprake van 2 logic levels, hoog en laag. De betekenis van het niveau is in dit geval 1 of 0",
        "floating": "Een pin/elektronisch kanaal wat niet actief naar een spanning gedreven is.",
        "pull-down weerstand": "Een weerstand die tussen de ground en een signaallijn geplaatst kan worden om het logisch niveau naar laag te krijgen. Als de signaallijn hierna actief naar een hoog niveau gedreven wordt, veroorzaakt dit door de weerstand geen kortsluiting",
        "pull-up weerstand": "Een weerstand die tussen een voltagebron en een signaallijn geplaatst kan worden om het logisch niveau naar hoog te krijgen. Als de signaallijn hierna actief naar een laag niveau gedreven wordt, veroorzaakt dit door de weerstand geen kortsluiting",
        "input pin": "Een pin die door de microcontroller uitgelezen word",
        "STM32HAL": "Een C-library ontwikkeld door ST om de microcontrollers via software aan te kunnen sturen",
        "microcontroller": "Een goedkope, compacte processor bedoeld om een specifiek doel in een embedded systeem uit te voeren",
        "microprocessor": "Een chip die een set instructies kan uitvoeren. De chip moet volledig extern worden aangestuurd.",
        "embedded": "Een computersysteem wat ingebouwd is in een product/voorwerp",
        "ROM": "Read Only Memory; Geheugen waar tijdens het uitvoeren van de code normaal gesproken niet naar geschreven kan worden. ",
        "RAM": "Random Access Memory; Geheugen waar tijdens het uitvoeren van code willekeurig gelezen en geschreven kan worden",
        "RaspberryPi": "Bekend merk van single board computers. Dit zijn mini-computers die in staat zijn om een besturingssysteem te draaien",
        "Arduino": "Bekend merk wat development boards voor microcontrollers ontwikkelt. ",
        "pinout": "Schematisch overzicht van alle verbindingspins van een chip/printplaat",
        "PCB": "Een printplaat; Een gelaagd kunststof-bord waarin verschillende koperkanalen zijn om chips zonder kabels/draden met elkaar te verbinden.",
        "LDR": "Een elektrisch onderdeel waarvan de weerstand verandert afhankelijk van de hitte",
        "potentiometer": "(ook wel pot) Een draaiknop waarvan de stand de weerstand tussen de poten beïnvloedt. Door deze eigenschap kan de positie van de potentiometer uitgelezen worden"
    })
}