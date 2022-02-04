import { GameMap } from './../maps';

export enum Regions {
    Orange = 'orange',
    Green = 'green',
    Yellow = 'yellow',
    Brown = 'brown',
    Red = 'red',
}

export enum Cities {
    Zimbaswe = 'Zimbaswe',
    Musina = 'Musina',
    Botswana = 'Botswana',
    Polokwane = 'Polokwane',
    Pretoria1 = 'Pretoria 1',
    Pretoria2 = 'Pretoria 2',
    Rustenburc = 'Rustenburc',
    Mozambique = 'Mozambique',
    Mbombela = 'Mbombela',
    Iswaini = 'Iswaini',
    Germiston = 'Germiston',
    Johannesburg1 = 'Johannesburg 1',
    Johannesburg2 = 'Johannesburg 2',
    Ladysmith = 'Ladysmith',
    Abc = 'Abc',
    Def = 'Def',
    Ghi1 = 'Ghi 1',
    Ghi2 = 'Ghi 2',
    Jkl = 'Jkl',
    Mno = 'Mno',
    Qrs = 'Qrs',
    Keerksorp = 'Keerksorp',
    Weikom = 'Weikom',
    Xuruman = 'Xuruman',
    Kimberly = 'Kimberly',
    Upincion = 'Upincion',
    Sprincbom = 'Sprincbom',
    Namibia = 'Namibia',
    Deaar = 'Deaar',
    Beaufortwest = 'Beaufort West',
    Eastlondon = 'East London',
    Portelizabeth = 'Port Elizabeth',
    Ceorci = 'Ceorci',
    Capetown1 = 'Capetown 1',
    Capetown2 = 'Capetown2',
}

export const map: GameMap = {
    name: 'South Africa',
    cities: [
        { name: Cities.Zimbaswe, region: Regions.Orange, x: 1060, y: 29 },
        { name: Cities.Musina, region: Regions.Orange, x: 1027, y: 125 },
        { name: Cities.Botswana, region: Regions.Orange, x: 665, y: 186 },
        { name: Cities.Polokwane, region: Regions.Orange, x: 944, y: 188 },
        { name: Cities.Pretoria1, region: Regions.Orange, x: 894, y: 271 },
        { name: Cities.Pretoria2, region: Regions.Orange, x: 894, y: 306 },
        { name: Cities.Rustenburc, region: Regions.Orange, x: 787, y: 327 },
        { name: Cities.Mozambique, region: Regions.Green, x: 1184, y: 167 },
        { name: Cities.Mbombela, region: Regions.Green, x: 1046, y: 287 },
        { name: Cities.Iswaini, region: Regions.Green, x: 1086, y: 375 },
        { name: Cities.Germiston, region: Regions.Green, x: 983, y: 375 },
        { name: Cities.Johannesburg1, region: Regions.Green, x: 887, y: 365 },
        { name: Cities.Johannesburg2, region: Regions.Green, x: 889, y: 398 },
        { name: Cities.Ladysmith, region: Regions.Green, x: 968, y: 495 },
        { name: Cities.Abc, region: Regions.Yellow, x: 1122, y: 521 },
        { name: Cities.Def, region: Regions.Yellow, x: 1000, y: 558 },
        { name: Cities.Ghi1, region: Regions.Yellow, x: 1049, y: 618 },
        { name: Cities.Ghi2, region: Regions.Yellow, x: 1048, y: 651 },
        { name: Cities.Jkl, region: Regions.Yellow, x: 931, y: 733 },
        { name: Cities.Mno, region: Regions.Yellow, x: 894, y: 572 },
        { name: Cities.Qrs, region: Regions.Yellow, x: 776, y: 556 },
        { name: Cities.Keerksorp, region: Regions.Brown, x: 780, y: 387 },
        { name: Cities.Weikom, region: Regions.Brown, x: 771, y: 467 },
        { name: Cities.Xuruman, region: Regions.Brown, x: 595, y: 415 },
        { name: Cities.Kimberly, region: Regions.Brown, x: 670, y: 541 },
        { name: Cities.Upincion, region: Regions.Brown, x: 456, y: 492 },
        { name: Cities.Sprincbom, region: Regions.Brown, x: 264, y: 580 },
        { name: Cities.Namibia, region: Regions.Brown, x: 239, y: 329 },
        { name: Cities.Deaar, region: Regions.Red, x: 641, y: 735 },
        { name: Cities.Beaufortwest, region: Regions.Red, x: 513, y: 782 },
        { name: Cities.Eastlondon, region: Regions.Red, x: 852, y: 833 },
        { name: Cities.Portelizabeth, region: Regions.Red, x: 712, y: 903 },
        { name: Cities.Ceorci, region: Regions.Red, x: 526, y: 903 },
        { name: Cities.Capetown1, region: Regions.Red, x: 290, y: 871 },
        { name: Cities.Capetown2, region: Regions.Red, x: 287, y: 904 },
    ],
    connections: [
        { nodes: [Cities.Sprincbom, Cities.Namibia], cost: 30 },
        { nodes: [Cities.Qrs, Cities.Mno], cost: 30 },
        { nodes: [Cities.Germiston, Cities.Iswaini], cost: 30 },
        { nodes: [Cities.Mbombela, Cities.Mozambique], cost: 30 },
        { nodes: [Cities.Botswana, Cities.Rustenburc], cost: 30 },
        { nodes: [Cities.Zimbaswe, Cities.Musina], cost: 30 },
        { nodes: [Cities.Capetown2, Cities.Capetown1], cost: 0 },
        { nodes: [Cities.Capetown2, Cities.Ceorci], cost: 16 },
        { nodes: [Cities.Ceorci, Cities.Portelizabeth], cost: 12 },
        { nodes: [Cities.Portelizabeth, Cities.Eastlondon], cost: 13 },
        { nodes: [Cities.Eastlondon, Cities.Jkl], cost: 8 },
        { nodes: [Cities.Jkl, Cities.Ghi2], cost: 13 },
        { nodes: [Cities.Ghi2, Cities.Ghi1], cost: 0 },
        { nodes: [Cities.Ghi1, Cities.Def], cost: 3 },
        { nodes: [Cities.Ghi1, Cities.Abc], cost: 9 },
        { nodes: [Cities.Abc, Cities.Def], cost: 9 },
        { nodes: [Cities.Def, Cities.Ladysmith], cost: 5 },
        { nodes: [Cities.Ladysmith, Cities.Abc], cost: 10 },
        { nodes: [Cities.Qrs, Cities.Jkl], cost: 18 },
        { nodes: [Cities.Qrs, Cities.Eastlondon], cost: 22 },
        { nodes: [Cities.Eastlondon, Cities.Deaar], cost: 22 },
        { nodes: [Cities.Deaar, Cities.Portelizabeth], cost: 18 },
        { nodes: [Cities.Ceorci, Cities.Deaar], cost: 17 },
        { nodes: [Cities.Deaar, Cities.Beaufortwest], cost: 10 },
        { nodes: [Cities.Beaufortwest, Cities.Ceorci], cost: 8 },
        { nodes: [Cities.Beaufortwest, Cities.Capetown1], cost: 22 },
        { nodes: [Cities.Capetown1, Cities.Sprincbom], cost: 22 },
        { nodes: [Cities.Sprincbom, Cities.Beaufortwest], cost: 24 },
        { nodes: [Cities.Deaar, Cities.Sprincbom], cost: 26 },
        { nodes: [Cities.Sprincbom, Cities.Upincion], cost: 16 },
        { nodes: [Cities.Upincion, Cities.Deaar], cost: 16 },
        { nodes: [Cities.Deaar, Cities.Qrs], cost: 13 },
        { nodes: [Cities.Qrs, Cities.Kimberly], cost: 6 },
        { nodes: [Cities.Kimberly, Cities.Deaar], cost: 10 },
        { nodes: [Cities.Kimberly, Cities.Upincion], cost: 14 },
        { nodes: [Cities.Kimberly, Cities.Weikom], cost: 9 },
        { nodes: [Cities.Weikom, Cities.Qrs], cost: 6 },
        { nodes: [Cities.Qrs, Cities.Ladysmith], cost: 19 },
        { nodes: [Cities.Jkl, Cities.Def], cost: 12 },
        { nodes: [Cities.Upincion, Cities.Xuruman], cost: 11 },
        { nodes: [Cities.Musina, Cities.Polokwane], cost: 8 },
        { nodes: [Cities.Polokwane, Cities.Pretoria1], cost: 11 },
        { nodes: [Cities.Pretoria1, Cities.Pretoria2], cost: 0 },
        { nodes: [Cities.Pretoria2, Cities.Johannesburg1], cost: 2 },
        { nodes: [Cities.Johannesburg1, Cities.Johannesburg2], cost: 0 },
        { nodes: [Cities.Johannesburg2, Cities.Germiston], cost: 1 },
        { nodes: [Cities.Johannesburg1, Cities.Mbombela], cost: 13 },
        { nodes: [Cities.Mbombela, Cities.Germiston], cost: 13 },
        { nodes: [Cities.Pretoria1, Cities.Mbombela], cost: 13 },
        { nodes: [Cities.Mbombela, Cities.Polokwane], cost: 10 },
        { nodes: [Cities.Musina, Cities.Mbombela], cost: 15 },
        { nodes: [Cities.Pretoria1, Cities.Rustenburc], cost: 4 },
        { nodes: [Cities.Rustenburc, Cities.Johannesburg1], cost: 4 },
        { nodes: [Cities.Johannesburg1, Cities.Keerksorp], cost: 7 },
        { nodes: [Cities.Keerksorp, Cities.Weikom], cost: 5 },
        { nodes: [Cities.Qrs, Cities.Johannesburg2], cost: 16 },
        { nodes: [Cities.Xuruman, Cities.Rustenburc], cost: 18 },
        { nodes: [Cities.Keerksorp, Cities.Xuruman], cost: 12 },
        { nodes: [Cities.Xuruman, Cities.Kimberly], cost: 8 },
        { nodes: [Cities.Johannesburg2, Cities.Ladysmith], cost: 13 },
        { nodes: [Cities.Ladysmith, Cities.Germiston], cost: 13 },
    ],
};
