import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import {createWebHistory, createRouter} from "vue-router";

import WatIsFondant from "@/components/Content/Pages/1-Fondant/1-WatIsFondant";

import WatIsEenMicrocontroller from "@/components/Content/Pages/2-Theorie/1-WatIsEenMicrocontroller";
import DigitaleLogica from "@/components/Content/Pages/2-Theorie/2-DigitaleLogica";
import SerieleCommunicatie from "@/components/Content/Pages/2-Theorie/3-SerieleCommunicatie";
import UartCommunicatie from "@/components/Content/Pages/2-Theorie/3-SerieleCommunicatie/1-UartCommunicatie";
import SPICommunicatie from "@/components/Content/Pages/2-Theorie/3-SerieleCommunicatie/2-SPICommunicatie";
import I2CCommunicatie from "@/components/Content/Pages/2-Theorie/3-SerieleCommunicatie/3-I2CCommunicatie";
import GeavanceerdeFuncties from "@/components/Content/Pages/2-Theorie/4-GeavanceerdeFuncties";


import VereistenInstalleren from "@/components/Content/Pages/3-Voorbereiding/1-VereistenInstalleren";
import NieuwProject from "@/components/Content/Pages/3-Voorbereiding/2-NieuwProject";

import STMProject from "@/components/Content/Pages/3-Voorbereiding/2-NieuwProject/1-STMProject";
import CLionProject from "@/components/Content/Pages/3-Voorbereiding/2-NieuwProject/2-CLionProject";
import FondantToevoegen from "@/components/Content/Pages/3-Voorbereiding/2-NieuwProject/3-FondantToevoegen";

import EenProgrammaUitvoeren from "@/components/Content/Pages/5-Ontwikkelen/1-EenProgrammaUitvoeren.vue"
import OntwikkelenMetFondant from "@/components/Content/Pages/5-Ontwikkelen/2-OntwikkelenMetFondant.vue"
import DeDebugger from "@/components/Content/Pages/5-Ontwikkelen/3-DeDebugger.vue"
import DeLogicAnalyzer from "@/components/Content/Pages/5-Ontwikkelen/4-DeLogicAnalyzer.vue"
import Voorbeelden from "@/components/Content/Pages/5-Ontwikkelen/5-Voorbeelden.vue"
import HelloWorld from "@/components/Content/Pages/5-Ontwikkelen/5-Voorbeelden/1-HelloWorld";
import PinInPinOut from "@/components/Content/Pages/5-Ontwikkelen/5-Voorbeelden/2-PinInPinOut";
import PinsDoorgeven from "@/components/Content/Pages/5-Ontwikkelen/5-Voorbeelden/3-PinsDoorgeven";
import SPI from "@/components/Content/Pages/5-Ontwikkelen/5-Voorbeelden/4-SPI";
import SPIDMA from "@/components/Content/Pages/5-Ontwikkelen/5-Voorbeelden/5-SPI-DMA";
import Interrupts from "@/components/Content/Pages/5-Ontwikkelen/5-Voorbeelden/6-Interrupts";

import InformatieVinden from "@/components/Content/Pages/6-Overig/1-InformatieVinden";
import OverDezeWebsite from "@/components/Content/Pages/6-Overig/2-OverDezeWebsite";


import Vue3HighlightEs from "vue3-highlightjs";
import 'highlight.js/styles/atelier-lakeside-light.css'

const routes = [
    // Home
    {
        path: "/",
        name: "Home",
        component: WatIsFondant
    },

    // Theorie
    {
        path: "/Theorie/WatIsEenMicrocontroller",
        name: "WatIsEenMicrocontroller",
        component: WatIsEenMicrocontroller
    },
    {
        path: "/Theorie/DigitaleLogica",
        name: "DigitaleLogica",
        component: DigitaleLogica
    },
    {
        path: "/Theorie/SerieleCommunicatie",
        name: "SerieleCommunicatie",
        component: SerieleCommunicatie
    },
    {
        path: "/Theorie/SerieleCommunicatie/UART",
        name: "UartCommunicatie",
        component: UartCommunicatie
    },
    {
        path: "/Theorie/SerieleCommunicatie/SPI",
        name: "SPICommunicatie",
        component: SPICommunicatie
    },
    {
        path: "/Theorie/SerieleCommunicatie/I2C",
        name: "I2CCommunicatie",
        component: I2CCommunicatie
    },
    {
        path: "/Theorie/GeavanceerdeFuncties",
        name: "GeavanceerdeFuncties",
        component: GeavanceerdeFuncties
    },

    // Voorbereiding
    {
        path: "/Voorbereiding/VereistenInstalleren",
        name: "VereistenInstalleren",
        component: VereistenInstalleren
    },
    {
        path: "/Voorbereiding/NieuwProject",
        name: "NieuwProject",
        component: NieuwProject
    },
    {
        path: "/Voorbereiding/NieuwProject/STMProject",
        name: "STMProject",
        component: STMProject
    },
    {
        path: "/Voorbereiding/NieuwProject/CLionProject",
        name: "CLionProject",
        component: CLionProject
    },
    {
        path: "/Voorbereiding/NieuwProject/FondantToevoegen",
        name: "FondantToevoegen",
        component: FondantToevoegen
    },

    // Ontwikkeling
    {
        path: "/Ontwikkelen/EenProgrammaUitvoeren",
        name: "EenProgrammaUitvoeren",
        component: EenProgrammaUitvoeren
    },
    {
        path: "/Ontwikkelen/OntwikkelenMetFondant",
        name: "OntwikkelenMetFondant",
        component: OntwikkelenMetFondant
    },
    {
        path: "/Ontwikkelen/DeDebugger",
        name: "DeDebugger",
        component: DeDebugger
    },
    {
        path: "/Ontwikkelen/DeLogicAnalyzer",
        name: "DeLogicAnalyzer",
        component: DeLogicAnalyzer
    },
    {
        path: "/Ontwikkelen/Voorbeelden",
        name: "Voorbeelden",
        component: Voorbeelden
    },
    {
        path: "/Ontwikkelen/Voorbeelden/HelloWorld",
        name: "HelloWorld",
        component: HelloWorld
    },
    {
        path: "/Ontwikkelen/Voorbeelden/PinInPinOut",
        name: "PinInPinOut",
        component: PinInPinOut
    },
    {
        path: "/Ontwikkelen/Voorbeelden/PinsDoorgeven",
        name: "PinsDoorgeven",
        component: PinsDoorgeven
    },
    {
        path: "/Ontwikkelen/Voorbeelden/SPI",
        name: "SPI",
        component: SPI
    },
    {
        path: "/Ontwikkelen/Voorbeelden/SPIDMA",
        name: "SPIDMA",
        component: SPIDMA
    },
    {
        path: "/Ontwikkelen/Voorbeelden/Interrupts",
        name: "Interrupts",
        component: Interrupts
    },

    // Overig
    {
        path: "/Overig/InformatieVinden",
        name: "InformatieVinden",
        component: InformatieVinden
    },
    {
        path: "/Overig/OverDezeWebsite",
        name: "OverDezeWebsite",
        component: OverDezeWebsite
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash !== "") {
            document.getElementById(to.hash.substring(1)).scrollIntoView({behavior: "smooth"});
            return false
        } else {
            if(document.getElementsByClassName("content-container").length > 0) {
                document.getElementsByClassName("content-container")?.[0]?.scrollTo({top: 0, behavior: 'smooth'});
            }
            return false;
        }
    },
})

createApp(App)
    .use(router)
    .use(Vue3HighlightEs)
    .mount('#app')
