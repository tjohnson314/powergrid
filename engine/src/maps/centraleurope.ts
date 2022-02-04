import { Map } from './../maps';

export enum Regions {
    Blue = 'blue',
    Brown = 'brown',
    Purple = 'purple',
    Red = 'red',
    Yellow = 'yellow',
    Green = 'green',
}

export enum Cities {
    Bialystok = 'Bialystok',
    Lublin = 'Lublin',
    Warszawa = 'Warszawa',
    Krakow = 'Krakow',
    Sosnowiec = 'Sosnowiec',
    Katowice = 'Katowice',
    Czestochowa = 'Czesto Chowa',
    Presov = 'Presov',
    Kosice = 'Kosice',
    Poprad = 'Poprad',
    Zilina = 'Zilina',
    Bratislava = 'Bratislava',
    Trnava = 'Trnava',
    Nyiregyhaza = 'Nyiregyhaza',
    Miskolc = 'Miskolc',
    Szeged = 'Szeged',
    Kecskeme = 'Kecskeme',
    Budapest = 'Budapest',
    Pecs = 'Pecs',
    Gyor = 'Gyor',
    Banskabystrica = 'Banska Bystrica',
    Goansk = 'Goansk',
    Goynia = 'Goynia',
    Byogoszcz = 'Byogoszcz',
    Wroclaw = 'Wroclaw',
    Poznan = 'Poznan',
    Szczecin = 'Szczecin',
    Lodz = 'Lodz',
    Graz = 'Graz',
    Klagenfurt = 'Klagenfurt',
    Villach = 'Villach',
    Innsbruck = 'Innsbruck',
    Salzburg = 'Salzburg',
    Linz = 'Linz',
    Wien = 'Wien',
    Hradeckralove = 'Hradec Kralove',
    Brno = 'Brno',
    Ceskebudejovice = 'Ceske Budejovice',
    Praha = 'Praha',
    Ostrava = 'Ostrava',
    Plzen = 'Plzen',
    Ustinadlaben = 'Ustinad Laben',
}

export const map: Map = {
    name: 'Central Europe',
    cities: [
        { name: Cities.Bialystok, region: Regions.Blue, x: 543, y: 135 },
        { name: Cities.Lublin, region: Regions.Blue, x: 590, y: 294 },
        { name: Cities.Warszawa, region: Regions.Blue, x: 482, y: 253 },
        { name: Cities.Krakow, region: Regions.Blue, x: 533, y: 443 },
        { name: Cities.Sosnowiec, region: Regions.Blue, x: 468, y: 443 },
        { name: Cities.Katowice, region: Regions.Blue, x: 446, y: 483 },
        { name: Cities.Czestochowa, region: Regions.Blue, x: 419, y: 397 },
        { name: Cities.Presov, region: Regions.Brown, x: 619, y: 487 },
        { name: Cities.Kosice, region: Regions.Brown, x: 646, y: 538 },
        { name: Cities.Poprad, region: Regions.Brown, x: 565, y: 529 },
        { name: Cities.Zilina, region: Regions.Brown, x: 476, y: 551 },
        { name: Cities.Bratislava, region: Regions.Brown, x: 423, y: 693 },
        { name: Cities.Trnava, region: Regions.Brown, x: 452, y: 638 },
        { name: Cities.Nyiregyhaza, region: Regions.Purple, x: 698, y: 582 },
        { name: Cities.Miskolc, region: Regions.Purple, x: 621, y: 597 },
        { name: Cities.Szeged, region: Regions.Purple, x: 680, y: 764 },
        { name: Cities.Kecskeme, region: Regions.Purple, x: 630, y: 727 },
        { name: Cities.Budapest, region: Regions.Purple, x: 557, y: 689 },
        { name: Cities.Pecs, region: Regions.Purple, x: 566, y: 832 },
        { name: Cities.Gyor, region: Regions.Purple, x: 489, y: 729 },
        { name: Cities.Banskabystrica, region: Regions.Brown, x: 525, y: 601 },
        { name: Cities.Goansk, region: Regions.Red, x: 286, y: 158 },
        { name: Cities.Goynia, region: Regions.Red, x: 249, y: 131 },
        { name: Cities.Byogoszcz, region: Regions.Red, x: 297, y: 257 },
        { name: Cities.Wroclaw, region: Regions.Red, x: 321, y: 445 },
        { name: Cities.Poznan, region: Regions.Red, x: 261, y: 342 },
        { name: Cities.Szczecin, region: Regions.Red, x: 110, y: 316 },
        { name: Cities.Lodz, region: Regions.Red, x: 420, y: 337 },
        { name: Cities.Graz, region: Regions.Yellow, x: 376, y: 811 },
        { name: Cities.Klagenfurt, region: Regions.Yellow, x: 340, y: 875 },
        { name: Cities.Villach, region: Regions.Yellow, x: 272, y: 875 },
        { name: Cities.Innsbruck, region: Regions.Yellow, x: 140, y: 879 },
        { name: Cities.Salzburg, region: Regions.Yellow, x: 209, y: 805 },
        { name: Cities.Linz, region: Regions.Yellow, x: 265, y: 744 },
        { name: Cities.Wien, region: Regions.Yellow, x: 366, y: 701 },
        { name: Cities.Hradeckralove, region: Regions.Green, x: 291, y: 546 },
        { name: Cities.Brno, region: Regions.Green, x: 354, y: 597 },
        { name: Cities.Ceskebudejovice, region: Regions.Green, x: 248, y: 670 },
        { name: Cities.Praha, region: Regions.Green, x: 220, y: 593 },
        { name: Cities.Ostrava, region: Regions.Green, x: 413, y: 535 },
        { name: Cities.Plzen, region: Regions.Green, x: 158, y: 645 },
        { name: Cities.Ustinadlaben, region: Regions.Green, x: 165, y: 537 },
    ],
    connections: [
        { nodes: [Cities.Goynia, Cities.Goansk], cost: 0 },
        { nodes: [Cities.Goansk, Cities.Byogoszcz], cost: 8 },
        { nodes: [Cities.Goynia, Cities.Szczecin], cost: 17 },
        { nodes: [Cities.Szczecin, Cities.Poznan], cost: 14 },
        { nodes: [Cities.Szczecin, Cities.Wroclaw], cost: 22 },
        { nodes: [Cities.Wroclaw, Cities.Poznan], cost: 9 },
        { nodes: [Cities.Poznan, Cities.Lodz], cost: 13 },
        { nodes: [Cities.Lodz, Cities.Byogoszcz], cost: 12 },
        { nodes: [Cities.Byogoszcz, Cities.Szczecin], cost: 15 },
        { nodes: [Cities.Wroclaw, Cities.Lodz], cost: 12 },
        { nodes: [Cities.Lodz, Cities.Czestochowa], cost: 7 },
        { nodes: [Cities.Czestochowa, Cities.Wroclaw], cost: 9 },
        { nodes: [Cities.Wroclaw, Cities.Ostrava], cost: 11 },
        { nodes: [Cities.Ostrava, Cities.Hradeckralove], cost: 16 },
        { nodes: [Cities.Hradeckralove, Cities.Wroclaw], cost: 10 },
        { nodes: [Cities.Wroclaw, Cities.Ustinadlaben], cost: 17 },
        { nodes: [Cities.Ustinadlaben, Cities.Hradeckralove], cost: 10 },
        { nodes: [Cities.Hradeckralove, Cities.Brno], cost: 9 },
        { nodes: [Cities.Brno, Cities.Ostrava], cost: 12 },
        { nodes: [Cities.Ostrava, Cities.Katowice], cost: 4 },
        { nodes: [Cities.Czestochowa, Cities.Lublin], cost: 17 },
        { nodes: [Cities.Lublin, Cities.Presov], cost: 20 },
        { nodes: [Cities.Presov, Cities.Krakow], cost: 13 },
        { nodes: [Cities.Krakow, Cities.Poprad], cost: 11 },
        { nodes: [Cities.Poprad, Cities.Zilina], cost: 11 },
        { nodes: [Cities.Zilina, Cities.Krakow], cost: 12 },
        { nodes: [Cities.Krakow, Cities.Sosnowiec], cost: 4 },
        { nodes: [Cities.Warszawa, Cities.Bialystok], cost: 14 },
        { nodes: [Cities.Bialystok, Cities.Goansk], cost: 20 },
        { nodes: [Cities.Byogoszcz, Cities.Warszawa], cost: 15 },
        { nodes: [Cities.Warszawa, Cities.Lublin], cost: 10 },
        { nodes: [Cities.Lodz, Cities.Warszawa], cost: 7 },
        { nodes: [Cities.Bialystok, Cities.Lublin], cost: 15 },
        { nodes: [Cities.Lublin, Cities.Krakow], cost: 16 },
        { nodes: [Cities.Poprad, Cities.Kosice], cost: 6 },
        { nodes: [Cities.Kosice, Cities.Nyiregyhaza], cost: 8 },
        { nodes: [Cities.Kosice, Cities.Miskolc], cost: 4 },
        { nodes: [Cities.Miskolc, Cities.Poprad], cost: 9 },
        { nodes: [Cities.Poprad, Cities.Banskabystrica], cost: 11 },
        { nodes: [Cities.Banskabystrica, Cities.Zilina], cost: 6 },
        { nodes: [Cities.Zilina, Cities.Trnava], cost: 10 },
        { nodes: [Cities.Zilina, Cities.Brno], cost: 14 },
        { nodes: [Cities.Brno, Cities.Wien], cost: 8 },
        { nodes: [Cities.Bratislava, Cities.Brno], cost: 10 },
        { nodes: [Cities.Brno, Cities.Trnava], cost: 10 },
        { nodes: [Cities.Trnava, Cities.Banskabystrica], cost: 10 },
        { nodes: [Cities.Banskabystrica, Cities.Miskolc], cost: 11 },
        { nodes: [Cities.Miskolc, Cities.Nyiregyhaza], cost: 7 },
        { nodes: [Cities.Nyiregyhaza, Cities.Szeged], cost: 16 },
        { nodes: [Cities.Szeged, Cities.Kecskeme], cost: 5 },
        { nodes: [Cities.Budapest, Cities.Trnava], cost: 9 },
        { nodes: [Cities.Trnava, Cities.Bratislava], cost: 2 },
        { nodes: [Cities.Bratislava, Cities.Wien], cost: 3 },
        { nodes: [Cities.Wien, Cities.Ceskebudejovice], cost: 14 },
        { nodes: [Cities.Ceskebudejovice, Cities.Praha], cost: 10 },
        { nodes: [Cities.Praha, Cities.Brno], cost: 13 },
        { nodes: [Cities.Brno, Cities.Ceskebudejovice], cost: 15 },
        { nodes: [Cities.Ceskebudejovice, Cities.Plzen], cost: 11 },
        { nodes: [Cities.Plzen, Cities.Praha], cost: 7 },
        { nodes: [Cities.Praha, Cities.Ustinadlaben], cost: 6 },
        { nodes: [Cities.Ustinadlaben, Cities.Plzen], cost: 9 },
        { nodes: [Cities.Ceskebudejovice, Cities.Linz], cost: 8 },
        { nodes: [Cities.Linz, Cities.Wien], cost: 11 },
        { nodes: [Cities.Wien, Cities.Graz], cost: 12 },
        { nodes: [Cities.Graz, Cities.Linz], cost: 16 },
        { nodes: [Cities.Linz, Cities.Salzburg], cost: 9 },
        { nodes: [Cities.Salzburg, Cities.Graz], cost: 22 },
        { nodes: [Cities.Graz, Cities.Gyor], cost: 14 },
        { nodes: [Cities.Gyor, Cities.Wien], cost: 8 },
        { nodes: [Cities.Bratislava, Cities.Gyor], cost: 6 },
        { nodes: [Cities.Gyor, Cities.Trnava], cost: 5 },
        { nodes: [Cities.Banskabystrica, Cities.Budapest], cost: 12 },
        { nodes: [Cities.Budapest, Cities.Gyor], cost: 5 },
        { nodes: [Cities.Budapest, Cities.Kecskeme], cost: 6 },
        { nodes: [Cities.Kecskeme, Cities.Miskolc], cost: 10 },
        { nodes: [Cities.Miskolc, Cities.Budapest], cost: 9 },
        { nodes: [Cities.Szeged, Cities.Pecs], cost: 12 },
        { nodes: [Cities.Pecs, Cities.Kecskeme], cost: 11 },
        { nodes: [Cities.Budapest, Cities.Pecs], cost: 12 },
        { nodes: [Cities.Pecs, Cities.Gyor], cost: 15 },
        { nodes: [Cities.Graz, Cities.Pecs], cost: 19 },
        { nodes: [Cities.Graz, Cities.Klagenfurt], cost: 10 },
        { nodes: [Cities.Klagenfurt, Cities.Villach], cost: 4 },
        { nodes: [Cities.Klagenfurt, Cities.Salzburg], cost: 20 },
        { nodes: [Cities.Salzburg, Cities.Innsbruck], cost: 15 },
        { nodes: [Cities.Innsbruck, Cities.Villach], cost: 22 },
        { nodes: [Cities.Poznan, Cities.Byogoszcz], cost: 7 },
        { nodes: [Cities.Lublin, Cities.Lodz], cost: 16 },
        { nodes: [Cities.Czestochowa, Cities.Sosnowiec], cost: 4 },
        { nodes: [Cities.Sosnowiec, Cities.Katowice], cost: 0 },
        { nodes: [Cities.Czestochowa, Cities.Krakow], cost: 6 },
        { nodes: [Cities.Poprad, Cities.Presov], cost: 7 },
        { nodes: [Cities.Presov, Cities.Kosice], cost: 2 },
        { nodes: [Cities.Ostrava, Cities.Zilina], cost: 7 },
        { nodes: [Cities.Ostrava, Cities.Krakow], cost: 7 },
        { nodes: [Cities.Praha, Cities.Hradeckralove], cost: 8 },
    ],
    layout: 'Portrait',
    mapPosition: [70, -60],
    adjustRatio: [1.15, 1.15],
};
