
export const getCharacterImage = (name, uid) => {

    const characters = {
        "Luke Skywalker": "https://static.wikia.nocookie.net/esstarwars/images/d/d9/Luke-rotjpromo.jpg",
        "C-3PO": "https://static.wikia.nocookie.net/esstarwars/images/5/51/C-3PO_EP3.png",
        "R2-D2": "https://static.wikia.nocookie.net/esstarwars/images/e/eb/ArtooTFA2-Fathead.png",
        "Darth Vader": "https://static.wikia.nocookie.net/villano/images/5/5d/DarthVader.webp/revision/latest/scale-to-width-down/1000?cb=20200725204020&path-prefix=es",
        "Leia Organa": "https://static.wikia.nocookie.net/esstarwars/images/8/89/Leia_endorpromo02.jpg",
        "Owen Lars": "https://i.blogs.es/36d486/joel-edgerton-owen-lars-01/1366_2000.webp",
        "Beru Whitesun lars": "https://static.wikia.nocookie.net/esstarwars/images/8/84/BeruWhitesunLars.jpg",
        "R5-D4": "https://static.wikia.nocookie.net/esstarwars/images/3/3f/R5D4-AG.png",
        "Biggs Darklighter": "https://static.wikia.nocookie.net/esstarwars/images/0/00/BiggsHS-ANH.png",
        "Obi-Wan Kenobi": "https://static.wikia.nocookie.net/esstarwars/images/f/f9/Shock.png"
    };

    return characters[name] || `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;
};

export const getPlanetImage = (name) => {

    const planets = {
        "Tatooine": "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png",
        "Alderaan": "https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg",
        "Yavin IV": "https://static.wikia.nocookie.net/esstarwars/images/a/a0/Eaw_Yavin4.jpg",
        "Hoth": "https://static.wikia.nocookie.net/esstarwars/images/8/81/Hoth_AoRCR.png",
        "Dagobah": "https://static.wikia.nocookie.net/esstarwars/images/5/58/Dagobah_FDNP.png",
        "Bespin": "https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png",
        "Endor": "https://static.wikia.nocookie.net/esstarwars/images/5/50/Endor_FFGRebellion.png",
        "Naboo": "https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png",
        "Coruscant": "https://static.wikia.nocookie.net/esstarwars/images/8/84/CoruscantGlobeE1.png",
        "Kamino": "https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg"
    };

    return planets[name];
};

export const getStarshipImage = (name) => {
    
    const starships = {
        "CR90 corvette": "https://static.wikia.nocookie.net/starwars/images/6/66/CR90corvette-BTMF18.png",
        "Star Destroyer": "https://static.wikia.nocookie.net/starwars/images/a/a7/ISD_arrow.jpg",
        "Sentinel-class landing craft": "https://static.wikia.nocookie.net/starwars/images/1/1f/SentinelClassLandingCraft-CGSWG.png",
        "Death Star": "https://static.wikia.nocookie.net/starwars/images/7/70/DSI-HDapproach.png",
        "Y-wing": "https://static.wikia.nocookie.net/starwars/images/8/81/Y-wing.png",
        "Millennium Falcon": "https://static.wikia.nocookie.net/starwars/images/5/52/Millennium_Falcon_Fathead_TROS.png",
        "TIE Advanced x1": "https://static.wikia.nocookie.net/starwars/images/1/1d/Vader_TIEAdvanced_SWB.png",
        "Executor": "https://static.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png",
        "X-wing": "https://static.wikia.nocookie.net/starwars/images/0/00/Xwing-ROOCE.png",
        "Rebel transport": "https://static.wikia.nocookie.net/starwars/images/6/67/GR-75_Medium_Transport_TAEtrivia.png"
    };
    
    return starships[name];
};