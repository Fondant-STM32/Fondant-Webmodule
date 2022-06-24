# Fondant Documentatie

Dit is de repository voor de documentatie van de Fondant lesmodule.

In de lesmodule wordt de basis van werken met microcontrollers uitgelegd, en 
maakt de lezer kennis met het STM32 platform op een praktische wijze. Een live
versie van deze documentatie is te vinden op [https://fondantlib.nl](https://fondantlib.nl).

Voor deze module is er ook een library ontwikkeld om STM32 processoren aan te sturen
op een objectgeoriënteerde wijze in C++. Deze is te vinden op [github.com](https://github.com/Fondant-STM32/Fondant)


# Technologieën
Deze webmodule maakt gebruik van de volgende libraries/frameworks.

- [VueJS](https://vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [WaveDrom](https://wavedrom.com/) 
- [Vue3Highlightjs](https://github.com/Daizhen1995/vue3-highlightjs)

# Zelf hosten/builden

Om zelf te builden moet npm/node geïnstalleerd zijn. Voer hierna eerst npm install uit om overige dependencies te installeren.
```shell
npm install
```


## Ontwikkelen

Tijdens het maken van aanpassingen aan de webmodule is het het beste om de ontwikkelserver te gebruiken. Deze laat aanpassingen
in de broncode automatisch zien.
```shell
npm run serve
```


## Bestanden/paden

- **src/App.vue** Hierin staat de structuur van de Sidebar
- **src/main.js** Het bestand waar elke module geladen wordt
- **src/components/Content/Pages** Hierin staat de inhoud van de webmodule


## Builden voor een webserver

Als alle aanpassingen af zijn kan de documentatie gebuild worden om te hosten op een webserver. Voer
hiervoor het volgende commando uit.
```shell
npm run build
```

Hierna kan je de volledige map "dist/" kopiëren naar de webserver

## Docker

De documentatie kan ook als docker-container gehost worden. Hiervoor heb je docker en docker-compose nodig.
Door het onderstaande commando uit te voeren wordt de webmodule automatisch gebuild en in een docker container geplaatst.

```shell
docker-compose up -d
```